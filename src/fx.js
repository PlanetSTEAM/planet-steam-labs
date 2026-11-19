// Planet STEAM Labs — motion layer.
// Same family as trinaxcode (three.js + GSAP/ScrollTrigger) with guardrails:
//  * one WebGL scene, paused when off-screen or tab hidden, DPR capped, fewer points on weak devices
//  * animations only touch transform/opacity
//  * native scroll (Lenis removed: it made scrolling feel laggy on integrated GPUs); everything off with "reduce motion"
//  * content is visible without JS: hidden states are set here, never in CSS
import {
  Scene, PerspectiveCamera, WebGLRenderer, BufferGeometry, BufferAttribute,
  ShaderMaterial, Points, AdditiveBlending, Color, Vector3, Group,
} from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(pointer: fine)').matches;
function gpuName() {
  try {
    const c = document.createElement('canvas').getContext('webgl');
    const ext = c && c.getExtension('WEBGL_debug_renderer_info');
    return ext ? String(c.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : '';
  } catch (e) { return ''; }
}
const integratedGpu = /intel|uhd|iris|mali|adreno|powervr|apple gpu|swiftshader|llvmpipe|microsoft basic/i.test(gpuName());
const weak = integratedGpu || (navigator.hardwareConcurrency || 4) <= 4 || innerWidth < 760;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

/* ---------------- Smooth scroll ---------------- */
// Native scroll (no Lenis): the browser scrolls on the GPU, with no JS inertia that feels like lag.
const lenis = null;

// In-page links: smooth scroll with room for the fixed header, and keep the page's
// own #hash behaviour (filters, highlighting a card) by firing hashchange ourselves.
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a || e.defaultPrevented) return;
  const id = decodeURIComponent(a.getAttribute('href').slice(1));
  const el = id && document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  history.pushState(null, '', '#' + id);
  window.dispatchEvent(new HashChangeEvent('hashchange'));
  revealInRow(el);
  requestAnimationFrame(() => {
    const inCatalog = el.closest('#servicios') && el !== $('#servicios') && innerWidth > 640;
    const offset = -(inCatalog ? 250 : 96);
    if (lenis) lenis.scrollTo(el, { offset, duration: 1.2 });
    else scrollTo({ top: el.getBoundingClientRect().top + scrollY + offset, behavior: reduce ? 'auto' : 'smooth' });
  });
});

function revealInRow(el) {
  const row = el && el.closest('.hrow');
  if (row) row.scrollTo({ left: el.offsetLeft - row.offsetLeft - 2, behavior: 'auto' });
}
window.addEventListener('hashchange', () => revealInRow(document.getElementById(decodeURIComponent(location.hash.slice(1)))));
if (location.hash) revealInRow(document.getElementById(decodeURIComponent(location.hash.slice(1))));

/* ---------------- Header: hides going down, returns going up ---------------- */
const head = $('#site-head');
if (head) {
  let last = 0;
  ScrollTrigger.create({
    start: 0, end: 'max',
    onUpdate(self) {
      const y = self.scroll();
      head.classList.toggle('scrolled', y > 8);
      if (!reduce) head.classList.toggle('away', y > 400 && self.direction === 1 && y - last > 0);
      last = y;
    },
  });
}

/* ---------------- Split text into masked words ---------------- */
function splitWords(el) {
  if (el.dataset.split) return $$('.w > span', el);
  el.dataset.split = '1';
  const walk = (node) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
          const w = document.createElement('span'); w.className = 'w';
          const i = document.createElement('span'); i.textContent = part;
          w.appendChild(i); frag.appendChild(w);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1) walk(n);
    });
  };
  walk(el);
  return $$('.w > span', el);
}

/* ---------------- WebGL: one field of points that changes shape with the scroll ---------------- */
// Shapes: 0 = planet with ring (hero) · 1 = elliptical galaxy · 2 = star dust.
const gl = { progress: { v: reduce ? 1 : 0 }, morph: 0, keys: [] };

function buildField(host) {
  const N = weak ? 3200 : 8000, STARS = weak ? 250 : 600, total = N + STARS;
  const scene = new Scene();
  const camera = new PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0, 7.2);
  let renderer;
  try { renderer = new WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'high-performance' }); }
  catch (err) { return null; }
  renderer.setPixelRatio(weak ? 1 : Math.min(devicePixelRatio || 1, 1.5));
  host.appendChild(renderer.domElement);

  const start = new Float32Array(total * 3), planet = new Float32Array(total * 3),
    ring = new Float32Array(total * 3), dust = new Float32Array(total * 3),
    rnd = new Float32Array(total), kind = new Float32Array(total);
  const planetN = Math.floor(N * 0.62), tilt = -0.42, c45 = Math.cos(0.45), s45 = Math.sin(0.45);
  for (let i = 0; i < total; i++) {
    let x, y, z, k;
    if (i < planetN) {
      const t = (i + 0.5) / planetN, phi = Math.acos(1 - 2 * t), th = Math.PI * (1 + Math.sqrt(5)) * i, r = 1.25 + (Math.random() - 0.5) * 0.03;
      x = r * Math.sin(phi) * Math.cos(th); y = r * Math.cos(phi); z = r * Math.sin(phi) * Math.sin(th); k = 0;
    } else if (i < N) {
      const a = Math.random() * Math.PI * 2, rr = 1.75 + Math.pow(Math.random(), 1.6) * 0.75;
      const lx = Math.cos(a) * rr, lz = Math.sin(a) * rr, ly = (Math.random() - 0.5) * 0.04;
      x = lx; y = ly * Math.cos(tilt) - lz * Math.sin(tilt); z = ly * Math.sin(tilt) + lz * Math.cos(tilt);
      const nx = x * c45 - y * s45; y = x * s45 + y * c45; x = nx; k = 1;
    } else {
      x = (Math.random() - 0.5) * 22; y = (Math.random() - 0.5) * 12; z = -4 - Math.random() * 10; k = 2;
    }
    planet.set([x, y, z], i * 3);
    if (k === 2) { ring.set([x, y, z], i * 3); dust.set([x, y, z], i * 3); start.set([x, y, z], i * 3); }
    else {
      // Galaxy: a wide band of points with two loose spiral arms, in the XZ plane (tilted in the shader).
      const g = Math.random(), arm = i % 2 ? 0 : Math.PI;
      const R = 1.5 + Math.pow(g, 0.8) * 1.9 + (Math.random() - 0.5) * 0.22;
      const ang = Math.random() * Math.PI * 2 * 0.85 + arm + R * 0.55 + (Math.random() - 0.5) * 0.9;
      ring.set([Math.cos(ang) * R * 1.3, (Math.random() - 0.5) * 0.12, Math.sin(ang) * R], i * 3);
      dust.set([(Math.random() - 0.5) * 17, (Math.random() - 0.5) * 9.5, -3 + Math.random() * 4.5], i * 3);
      const u = Math.random() * Math.PI * 2, v = Math.acos(2 * Math.random() - 1), D = 5 + Math.random() * 6;
      start.set([D * Math.sin(v) * Math.cos(u), D * Math.sin(v) * Math.sin(u), D * Math.cos(v) - 2], i * 3);
    }
    rnd[i] = Math.random(); kind[i] = k;
  }
  const geo = new BufferGeometry();
  geo.setAttribute('position', new BufferAttribute(start, 3));
  geo.setAttribute('aPlanet', new BufferAttribute(planet, 3));
  geo.setAttribute('aRing', new BufferAttribute(ring, 3));
  geo.setAttribute('aDust', new BufferAttribute(dust, 3));
  geo.setAttribute('aRand', new BufferAttribute(rnd, 1));
  geo.setAttribute('aKind', new BufferAttribute(kind, 1));

  const uniforms = {
    uTime: { value: 0 }, uProgress: { value: gl.progress.v }, uMorph: { value: 0 },
    uMouse: { value: new Vector3(99, 99, 0) }, uPixel: { value: renderer.getPixelRatio() },
    uA: { value: new Color('#5b86ff') }, uB: { value: new Color('#9fb4ff') }, uC: { value: new Color('#5ee0ff') },
  };
  const mat = new ShaderMaterial({
    uniforms, transparent: true, depthWrite: false, blending: AdditiveBlending,
    vertexShader: /* glsl */`
      uniform float uTime, uProgress, uMorph, uPixel; uniform vec3 uMouse;
      attribute vec3 aPlanet, aRing, aDust; attribute float aRand, aKind;
      varying float vMix, vAlpha;
      vec3 rotY(vec3 p, float a){ float c=cos(a), s=sin(a); return vec3(c*p.x + s*p.z, p.y, -s*p.x + c*p.z); }
      vec3 rotX(vec3 p, float a){ float c=cos(a), s=sin(a); return vec3(p.x, c*p.y - s*p.z, s*p.y + c*p.z); }
      float stag(float x){ float d = aRand * 0.3; float t = clamp((x - d) / 0.7, 0.0, 1.0); return t*t*(3.0-2.0*t); }
      void main(){
        vec3 planet = rotY(aPlanet, uTime * 0.12);
        vec3 ring = rotX(rotY(aRing, uTime * 0.035), -0.5);
        vec3 dust = aDust + vec3(sin(uTime*0.13 + aRand*30.0), cos(uTime*0.11 + aRand*17.0), 0.0) * 0.35;
        float m1 = stag(clamp(uMorph, 0.0, 1.0)), m2 = stag(clamp(uMorph - 1.0, 0.0, 1.0));
        vec3 shape = aKind > 1.5 ? aPlanet : mix(mix(planet, ring, m1), dust, m2);
        float d = aRand * 0.35; float p = clamp((uProgress - d) / 0.65, 0.0, 1.0); p = p*p*(3.0-2.0*p);
        vec3 pos = mix(position, shape, p);
        pos += 0.025 * vec3(sin(uTime*0.9 + aRand*40.0), cos(uTime*0.7 + aRand*30.0), sin(uTime*0.8 + aRand*20.0));
        vec4 wp = modelMatrix * vec4(pos, 1.0);
        if (aKind < 1.5) {
          vec3 dir = wp.xyz - uMouse; float f = smoothstep(1.1, 0.0, length(dir.xy));
          wp.xyz += normalize(dir + 1e-4) * f * 0.45;
        }
        vec4 mv = viewMatrix * wp;
        gl_Position = projectionMatrix * mv;
        float size = aKind > 1.5 ? 1.8 : (aKind > 0.5 ? 2.6 : 3.1);
        size *= mix(1.0, 0.9, m1);
        gl_PointSize = size * uPixel * (7.0 / -mv.z) * (0.8 + aRand * 0.6);
        vMix = (aKind > 0.5 && aKind < 1.5 && m1 < 0.5) ? 1.0 : aRand;
        vAlpha = (aKind > 1.5 ? 0.55 : 1.0) * mix(1.0, 0.45, m2);
      }`,
    fragmentShader: /* glsl */`
      uniform vec3 uA, uB, uC; varying float vMix, vAlpha;
      void main(){
        vec2 c = gl_PointCoord - 0.5; float r = length(c);
        if (r > 0.5) discard;
        float a = smoothstep(0.5, 0.0, r);
        vec3 col = vMix > 0.99 ? mix(uB, uC, 0.35) : mix(uA, uB, vMix);
        gl_FragColor = vec4(col, a * vAlpha);
      }`,
  });
  const pts = new Points(geo, mat);
  const group = new Group(); group.add(pts); scene.add(group);

  let wide = true;
  function layout() {
    const w = host.clientWidth, h = host.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
    wide = w / h > 1.15;
    host.classList.toggle('narrow', !wide);
  }
  layout();
  let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(layout, 120); });

  const target3 = new Vector3(99, 99, 0), tmp = new Vector3();
  if (finePointer && !reduce) {
    addEventListener('pointermove', (e) => {
      tmp.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1, 0.5).unproject(camera);
      tmp.sub(camera.position).normalize();
      target3.copy(camera.position).addScaledVector(tmp, -camera.position.z / tmp.z);
    }, { passive: true });
  }
  const tilt2 = { x: 0, y: 0 };

  // Scroll position -> shape, from keyframes measured on the real layout (refreshed on resize).
  function morphAt(y) {
    const k = gl.keys; if (!k.length) return 0;
    if (y <= k[0][0]) return k[0][1];
    for (let i = 1; i < k.length; i++) if (y <= k[i][0]) {
      const [y0, m0] = k[i - 1], [y1, m1] = k[i]; return m0 + (m1 - m0) * ((y - y0) / Math.max(1, y1 - y0));
    }
    return k[k.length - 1][1];
  }

  let running = false, raf = 0, last = performance.now(), skip = 0;
  function frame(now) {
    if (running) raf = requestAnimationFrame(frame);
    const settled = gl.morph > 1.98 && Math.abs(morphAt(scrollY) - gl.morph) < 0.01;
    const every = settled ? 6 : (weak ? 2 : 1);          // dust ~10 fps, weak GPUs 30 fps, others 60
    skip = (skip + 1) % every; if (skip) return;
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    gl.morph += (morphAt(scrollY) - gl.morph) * Math.min(1, dt * 5);
    uniforms.uTime.value += dt;
    uniforms.uProgress.value = gl.progress.v;
    uniforms.uMorph.value = gl.morph;
    uniforms.uMouse.value.lerp(target3, 0.08);
    const m1 = Math.min(1, gl.morph);
    group.position.set((wide ? 1.95 : 0) * (1 - m1), (wide ? 0.1 : 1.1) * (1 - m1), 0);
    group.scale.setScalar((wide ? 0.88 : 0.72) + (wide ? 0.12 : 0.1) * m1);
    tilt2.x += ((target3.y < 50 ? target3.y * 0.04 : 0) - tilt2.x) * 0.04;
    tilt2.y += ((target3.x < 50 ? target3.x * 0.04 : 0) - tilt2.y) * 0.04;
    group.rotation.x = tilt2.x; group.rotation.z = -tilt2.y * 0.5;
    renderer.render(scene, camera);
  }
  function setRun() {
    const want = !document.hidden && !reduce;
    if (want === running) return;
    running = want; cancelAnimationFrame(raf);
    if (want) { last = performance.now(); raf = requestAnimationFrame(frame); }
  }
  document.addEventListener('visibilitychange', setRun);
  frame(performance.now());
  setRun();
  return true;
}

// Where each shape lives on the page (in scroll pixels).
function measureKeys() {
  const top = (sel) => { const e = $(sel); return e ? e.getBoundingClientRect().top + scrollY : null; };
  const vh = innerHeight, k = [[0, 0]];
  const start = top('#demo') ?? top('#servicios');
  const endEl = $('#stack') || $('#servicios');
  const end = endEl ? endEl.getBoundingClientRect().top + scrollY + endEl.offsetHeight : null;
  if (start != null) k.push([start - vh * 0.6, 0.05], [start, 1]);
  if (end != null) k.push([end - vh * 0.3, 1], [end + vh * 0.4, 2]);
  gl.keys = k.sort((a, b) => a[0] - b[0]);
}

/* ---------------- Page choreography ---------------- */
function intro() {
  const h1 = $('.s010');
  const words = h1 ? splitWords(h1) : [];
  if (reduce) return;
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.to(gl.progress, { v: 1, duration: 2.8, ease: 'power3.inOut' }, 0)
    .from('.s009', { y: 20, opacity: 0, duration: 0.7 }, 0.15)
    .from(words, { yPercent: 115, duration: 1.0, stagger: 0.06 }, 0.25)
    .from('.s011', { y: 24, opacity: 0, duration: 0.8 }, 0.75)
    .from('.s012 > a', { y: 20, opacity: 0, duration: 0.7, stagger: 0.08 }, 0.9)
    .from('.hero-tags span', { y: 14, opacity: 0, duration: 0.5, stagger: 0.05 }, 1.05)
    .from('.s015 > div', { y: 24, opacity: 0, duration: 0.7, stagger: 0.1 }, 1.15)
    .from('.site-head', { yPercent: -100, duration: 0.7 }, 0.1);
}

function scrollScenes() {
  if (reduce) return;
  const hero = $('#inicio')?.closest('section');

  // Hero: planet scatters and text drifts as the hero scrolls away.
  if (hero) {
    gsap.to('#inicio', { yPercent: 18, opacity: 0.2, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
  }

  // Counter on "50 soluciones".
  const stat = $('.s015 .s016');
  if (stat && /^\d+/.test(stat.textContent)) {
    const rest = stat.textContent.replace(/^\d+/, ''), n = { v: 0 };
    gsap.to(n, { v: parseInt(stat.textContent, 10), duration: 1.6, delay: 1.2, ease: 'power2.out',
      onUpdate: () => { stat.textContent = Math.round(n.v) + rest; } });
  }

  // Section titles: words rise from a mask.
  $$('.s020,.s028,.s060,.s072,.s085,.s205,.startup-heading').filter((h) => !h.closest('.app-frame')).forEach((h) => {
    if (h.getBoundingClientRect().top < innerHeight * 0.9) return;
    const w = splitWords(h);
    gsap.from(w, { yPercent: 115, duration: 0.9, ease: 'power3.out', stagger: 0.035,
      scrollTrigger: { trigger: h, start: 'top 88%', once: true } });
  });
  $$('.s019,.s059').forEach((e) => {
    if (e.getBoundingClientRect().top < innerHeight * 0.9) return;
    gsap.from(e, { opacity: 0, x: -16, duration: 0.6, scrollTrigger: { trigger: e, start: 'top 90%', once: true } });
  });

  // Cards: staggered entrance in batches (one observer for all of them).
  const cards = $$('.s023,.s036,.s047,.s063,.s075,.s088,.s091,.s135,.s139,.s143,.s193,.s212,.startup-card')
    .filter((c) => c.getBoundingClientRect().top > innerHeight * 0.95 && !c.closest('.car'));
  // Reveal with IntersectionObserver: independent of layout measurements, so cards never stay hidden.
  gsap.set(cards, { y: 36, opacity: 0 });
  let queue = [], qt = 0;
  const flush = () => { gsap.to(queue, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.08, overwrite: true }); queue = []; };
  const cio = new IntersectionObserver((es) => {
    es.forEach((e) => { if (e.isIntersecting) { queue.push(e.target); cio.unobserve(e.target); } });
    if (queue.length) { clearTimeout(qt); qt = setTimeout(flush, 30); }
  }, { rootMargin: '0px 0px -6% 0px' });
  cards.forEach((c) => cio.observe(c));
  // Filtering can reveal cards that never entered the viewport: show them right away.
  ['#cat-search', '#cat-type', '#cat-spec', '#cat-reset'].forEach((s) => $(s)?.addEventListener(s === '#cat-reset' ? 'click' : 'input', () => {
    gsap.set(cards.filter((c) => c.closest('#servicios,#business')), { y: 0, opacity: 1 });
    ScrollTrigger.refresh();
  }));
  $('#cat-type')?.addEventListener('change', () => ScrollTrigger.refresh());
  $('#cat-spec')?.addEventListener('change', () => ScrollTrigger.refresh());
  window.addEventListener('hashchange', () => gsap.set(cards, { y: 0, opacity: 1 }));

  // Timeline: the dot travels down the line and each phase lights up as it passes.
  const tl = $('#tl');
  if (tl) {
    tl.classList.add('live');
    const rows = $$('.tl-row', tl), dot = $('.tl-dot', tl);
    ScrollTrigger.create({
      trigger: tl, start: 'top 65%', end: 'bottom 55%', scrub: true,
      onUpdate: (st) => {
        const h = tl.offsetHeight - 60;
        gsap.set(dot, { y: st.progress * h });
        const idx = Math.min(rows.length - 1, Math.floor(st.progress * rows.length));
        rows.forEach((r, i) => r.classList.toggle('on', i <= idx));
      },
    });
    rows[0].classList.add('on');
    rows.forEach((r) => gsap.from($('.tl-num', r), { yPercent: 40, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: r, start: 'top 85%', once: true } }));
  }

  // Featured project card: tiles rise in, gauge fills.
  const star = $('.star');
  if (star) {
    gsap.from($$('.tile', star), { y: 50, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: star, start: 'top 80%', once: true } });
    gsap.from('.g-fg', { strokeDasharray: '0 100', duration: 1.6, ease: 'power2.out', scrollTrigger: { trigger: star, start: 'top 70%', once: true } });
    gsap.from('.bars i', { backgroundSize: '0% 100%', duration: 1.2, stagger: 0.12, ease: 'power2.out', scrollTrigger: { trigger: star, start: 'top 70%', once: true } });
  }

  // Tech chips: a gentle wave as they enter.
  gsap.from('.s191', { y: 18, opacity: 0, stagger: 0.04, duration: 0.5, scrollTrigger: { trigger: '.s189', start: 'top 92%', once: true } });
}


/* ---------------- Menu ---------------- */
function menu() {
  const btn = $('#burger'), m = $('#menu');
  if (!btn || !m) return;
  const links = $$('a', m);
  const set = (open) => {
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    document.documentElement.classList.toggle('menu-open', open);
    if (open) {
      m.hidden = false; lenis?.stop();
      if (!reduce) gsap.fromTo(links, { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.6, stagger: 0.05, ease: 'power3.out' });
      links[0]?.focus();
    } else { m.hidden = true; lenis?.start(); }
  };
  btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'));
  links.forEach((a) => a.addEventListener('click', () => set(false)));
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && !m.hidden) { set(false); btn.focus(); } });
}

/* ---------------- Projects carousel ---------------- */
function carousel() {
  const car = $('#car'); if (!car) return;
  const items = $$('.car-item', car), prev = $('#car-prev'), next = $('#car-next'), iEl = $('#car-i'), nEl = $('#car-n');
  const pad = (n) => String(n).padStart(2, '0');
  nEl.textContent = pad(items.length);
  const current = () => {
    const x = car.scrollLeft; let best = 0, bd = Infinity;
    items.forEach((it, i) => { const d = Math.abs(it.offsetLeft - car.offsetLeft - x); if (d < bd) { bd = d; best = i; } });
    return best;
  };
  const update = () => {
    const i = current(); iEl.textContent = pad(i + 1);
    prev.disabled = car.scrollLeft < 4;
    next.disabled = car.scrollLeft + car.clientWidth >= car.scrollWidth - 4;
  };
  const go = (d) => { const i = Math.max(0, Math.min(items.length - 1, current() + d)); car.scrollTo({ left: items[i].offsetLeft - car.offsetLeft, behavior: reduce ? 'auto' : 'smooth' }); };
  prev.addEventListener('click', () => go(-1)); next.addEventListener('click', () => go(1));
  car.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
  car.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') { e.preventDefault(); go(1); } if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); } });
  update();
  if (!reduce) gsap.from(items, { x: 120, opacity: 0, duration: 1, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: car, start: 'top 85%', once: true } });
}


/* ---------------- Live demo: the app works by itself ---------------- */
function liveDemo() {
  const root = $('#app-demo'); if (!root) return;
  const scenes = $$('.scene', root), tabs = $$('.dtab'), side = $$('.app-item', root);
  const input = $('#demo-input'), status = $('#demo-status'), cursor = $('.fake-cursor', root), send = $('.send', root), main = $('.app-main', root);
  const statuses = JSON.parse($('#demo-data').textContent);
  const placeholder = input.textContent;
  tabs.forEach((t) => { const b = document.createElement('span'); b.className = 'prog'; t.appendChild(b); });
  let cur = 0, tl = null, visible = false;

  const rel = (el) => { const a = el.getBoundingClientRect(), b = main.getBoundingClientRect(); return { x: a.left - b.left + a.width / 2, y: a.top - b.top + a.height / 2 }; };
  function show(i) {
    cur = i;
    scenes.forEach((s, k) => { s.hidden = k !== i; });
    tabs.forEach((t, k) => { t.classList.toggle('on', k === i); t.setAttribute('aria-pressed', String(k === i)); gsap.set($('.prog', t), { scaleX: 0 }); });
    side.forEach((t, k) => t.classList.toggle('on', k === i));
    status.textContent = statuses[i];
  }
  function build(i) {
    show(i);
    const sc = scenes[i], user = $('.msg.user', sc), bot = $('.msg.bot', sc), hello = $('.hello', sc);
    const text = $('.typed', sc).dataset.text, approve = $('.approve', sc);
    gsap.set([user, bot], { autoAlpha: 0, y: 14 }); gsap.set(hello, { autoAlpha: 1, y: 0 });
    if (approve) { approve.classList.remove('ok'); $('button', approve).textContent = 'Aprobar'; }
    input.textContent = placeholder; input.classList.remove('typing');
    const t = gsap.timeline({ onComplete: () => go(cur + 1) });
    const typed = { n: 0 };
    t.set(cursor, { autoAlpha: 0, x: 0, y: 0 })
      .to(typed, { n: text.length, duration: Math.min(2.2, text.length * 0.04), ease: 'none',
        onStart: () => input.classList.add('typing'),
        onUpdate: () => { input.textContent = text.slice(0, Math.round(typed.n)); } }, 0.5)
      .add(() => { const r = main.getBoundingClientRect(); gsap.set(cursor, { left: r.width * 0.72, top: r.height * 0.55 }); })
      .to(cursor, { autoAlpha: 1, duration: 0.2 })
      .add(() => { const p = rel(send); gsap.to(cursor, { left: p.x - 4, top: p.y - 2, duration: 0.7, ease: 'power2.inOut' }); })
      .to({}, { duration: 0.8 })
      .add(() => { send.classList.add('press'); setTimeout(() => send.classList.remove('press'), 160); })
      .to(hello, { autoAlpha: 0, y: -20, duration: 0.35 }, '+=0.1')
      .add(() => { input.textContent = placeholder; input.classList.remove('typing'); })
      .to(user, { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power3.out' })
      .to(cursor, { autoAlpha: 0, duration: 0.3 }, '<')
      .to(bot, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '+=0.7')
      .from($$('.src em, .ext tbody tr, .plan li, .mini-chart i, .note', bot), { autoAlpha: 0, y: 8, scaleY: (k, el) => (el.tagName === 'I' ? 0 : 1), duration: 0.45, stagger: 0.15, ease: 'power2.out' }, '-=0.1');
    if (approve) {
      const btn = $('button', approve);
      t.add(() => { const p = rel(btn); gsap.set(cursor, { left: p.x + 60, top: p.y + 50 }); })
        .to(cursor, { autoAlpha: 1, duration: 0.2 }, '+=0.4')
        .add(() => { const p = rel(btn); gsap.to(cursor, { left: p.x - 4, top: p.y - 2, duration: 0.6, ease: 'power2.inOut' }); })
        .to({}, { duration: 0.75 })
        .add(() => { approve.classList.add('ok'); btn.textContent = 'Aprobado ✓'; })
        .to(cursor, { autoAlpha: 0, duration: 0.3 }, '+=0.3');
    }
    t.to({}, { duration: 2.6 });
    t.fromTo($('.prog', tabs[i]), { scaleX: 0 }, { scaleX: 1, duration: t.duration(), ease: 'none' }, 0);
    return t;
  }
  function go(i) {
    tl?.kill();
    i = (i + scenes.length) % scenes.length;
    if (reduce) { show(i); return; }
    tl = build(i);
    if (!visible) tl.pause();
  }
  tabs.forEach((t, k) => t.addEventListener('click', () => go(k)));
  if (reduce) { show(0); return; }
  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (!tl) { if (visible) go(0); return; }
    visible ? tl.resume() : tl.pause();
  }, { threshold: 0.35 }).observe(root);
  document.addEventListener('visibilitychange', () => { if (!tl) return; document.hidden ? tl.pause() : visible && tl.resume(); });
  // Static first frame for no-motion browsers / before it starts.
  scenes.forEach((sc, k) => { if (k) return; gsap.set([$('.msg.user', sc), $('.msg.bot', sc)], { autoAlpha: 0 }); });
}

/* ---------------- Stack marquee: auto-scroll, drag, tap for details ---------------- */
function marquee() {
  const rows = $$('.mq'); if (!rows.length) return;
  const out = $('#tech-used');
  const state = rows.map((row) => {
    const track = $('.mq-track', row);
    [...track.children].forEach((c) => { const k = c.cloneNode(true); k.setAttribute('aria-hidden', 'true'); k.tabIndex = -1; track.appendChild(k); });
    return { row, track, x: 0, dir: Number(row.dataset.dir) || 1, drag: null, moved: 0, hover: false };
  });
  let visible = false;
  state.forEach((s) => {
    s.row.addEventListener('pointerdown', (e) => { s.drag = { x0: e.clientX, start: s.x, id: e.pointerId }; s.moved = 0; });
    s.row.addEventListener('pointermove', (e) => {
      if (!s.drag) return; const dx = e.clientX - s.drag.x0; s.moved = Math.max(s.moved, Math.abs(dx));
      if (s.moved > 6 && !s.row.classList.contains('drag')) { s.row.classList.add('drag'); try { s.row.setPointerCapture(s.drag.id); } catch (err) {} }
      if (s.moved > 6) s.x = s.drag.start + dx;
    });
    const end = () => { s.drag = null; s.row.classList.remove('drag'); };
    s.row.addEventListener('pointerup', end); s.row.addEventListener('pointercancel', end);
    s.row.addEventListener('pointerenter', () => { s.hover = true; }); s.row.addEventListener('pointerleave', () => { s.hover = false; });
    s.row.addEventListener('click', (e) => {
      const pill = e.target.closest('.tech-pill'); if (!pill) return;
      if (s.moved > 6) { e.preventDefault(); return; }
      $$('.tech-pill.on').forEach((p) => p.classList.remove('on'));
      pill.classList.add('on');
      const name = (pill.lastChild && pill.lastChild.textContent || pill.textContent).trim();
      out.textContent = pill.dataset.used ? name + ' → ' + pill.dataset.used : name;
    });
  });
  const tick = (time, dt) => {
    if (!visible) return;
    state.forEach((s) => {
      const half = s.track.scrollWidth / 2;
      if (!s.drag && !reduce) s.x -= s.dir * (s.hover ? 0.25 : 1) * 0.045 * dt;
      if (s.x <= -half) s.x += half; if (s.x > 0) s.x -= half;
      s.track.style.transform = 'translate3d(' + s.x.toFixed(1) + 'px,0,0)';
    });
  };
  gsap.ticker.add(tick);
  new IntersectionObserver((es) => { visible = es.some((e) => e.isIntersecting) || state.some((s) => { const r = s.row.getBoundingClientRect(); return r.bottom > 0 && r.top < innerHeight; }); }).observe(rows[0]);
  new IntersectionObserver(() => { visible = state.some((s) => { const r = s.row.getBoundingClientRect(); return r.bottom > 0 && r.top < innerHeight; }); }).observe(rows[rows.length - 1]);
}


/* ---------------- Horizontal rows: arrows + count (native scrolling, no JS per frame) ---------------- */
function hrows() {
  const svg = (d) => `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="${d}"/></svg>`;
  $$('.hrow').forEach((row) => {
    const items = [...row.children]; if (items.length < 2) return;
    const ctl = document.createElement('div'); ctl.className = 'row-ctl';
    const prevEl = row.previousElementSibling, hasCount = prevEl && /\d/.test(prevEl.textContent);
    ctl.innerHTML = `${hasCount ? '' : `<span>${items.length}</span>`}<button type="button" class="row-btn" aria-label="Anterior">${svg('M19 12H5M11 18l-6-6 6-6')}</button><button type="button" class="row-btn" aria-label="Siguiente">${svg('M5 12h14M13 6l6 6-6 6')}</button>`;
    const prev = row.previousElementSibling;
    const head = document.createElement('div'); head.className = 'row-head';
    if (prev && prev.matches('h3')) { prev.before(head); head.append(prev, ctl); } else { head.append(document.createElement('span'), ctl); row.before(head); }
    const [bPrev, bNext] = ctl.querySelectorAll('button');
    const step = () => (items[0].getBoundingClientRect().width + 16) * Math.max(1, Math.floor(row.clientWidth / (items[0].getBoundingClientRect().width + 16)));
    bPrev.addEventListener('click', () => row.scrollBy({ left: -step(), behavior: reduce ? 'auto' : 'smooth' }));
    bNext.addEventListener('click', () => row.scrollBy({ left: step(), behavior: reduce ? 'auto' : 'smooth' }));
    let raf = 0;
    const upd = () => { raf = 0; bPrev.disabled = row.scrollLeft < 4; bNext.disabled = row.scrollLeft + row.clientWidth >= row.scrollWidth - 4; };
    row.addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(upd); }, { passive: true });
    upd();
  });
}


/* ---------------- Project videos: slots filled from assets/videos/videos.json, played in a lightbox ---------------- */
function videos() {
  const slots = $$('[data-video]'), triggers = $$('[data-play]');
  if (!slots.length && !triggers.length) return;
  let lib = {};
  const box = document.createElement('div');
  box.className = 'vbox'; box.hidden = true;
  box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true'); box.setAttribute('aria-label', 'Video');
  box.innerHTML = '<div class="vbox-in"><div class="vbox-head"><span class="vbox-title"></span><button type="button" class="vbox-x" aria-label="Cerrar video">✕</button></div><div class="vbox-media"></div></div>';
  document.body.appendChild(box);
  const media = $('.vbox-media', box), title = $('.vbox-title', box);
  let back = null;
  const close = () => { media.innerHTML = ''; box.hidden = true; $$('.vthumb video.on').forEach((x) => x.play().catch(() => {})); document.documentElement.classList.remove('menu-open'); back?.focus(); };
  const open = (key, from) => {
    const v = lib[key]; if (!v) return;
    back = from || null; title.textContent = v.title || '';
    media.innerHTML = v.youtube
      ? `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.youtube)}?autoplay=1&rel=0" title="${(v.title || 'Video').replace(/"/g, '')}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`
      : `<video src="${v.src}" ${v.poster ? `poster="${v.poster}"` : ''} controls autoplay playsinline preload="auto"></video>`;
    $$('.vthumb video').forEach((x) => x.pause());
    box.hidden = false; document.documentElement.classList.add('menu-open');
    $('.vbox-x', box).focus();
  };
  $('.vbox-x', box).addEventListener('click', close);
  box.addEventListener('click', (e) => { if (e.target === box) close(); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && !box.hidden) close(); });

  fetch('assets/videos/videos.json', { cache: 'no-cache' }).then((r) => (r.ok ? r.json() : {})).catch(() => ({})).then((data) => {
    lib = data || {};
    const previews = [], previewOf = new WeakMap();
    slots.forEach((slot) => {
      const key = slot.dataset.video, v = lib[key]; if (!v) return;
      const poster = v.poster || (v.youtube ? `https://i.ytimg.com/vi/${encodeURIComponent(v.youtube)}/hqdefault.jpg` : '');
      const btn = document.createElement('button');
      btn.type = 'button'; btn.className = 'vthumb';
      btn.setAttribute('aria-label', 'Ver video: ' + (v.title || key));
      btn.innerHTML = `${poster ? `<img src="${poster}" alt="" loading="lazy" decoding="async">` : ''}<span class="vplay" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4l13 8-13 8z"/></svg></span>${v.duration ? `<span class="vdur">${v.duration}</span>` : ''}`;
      const reel = !!slot.closest('.star-reel');
      if (reel) btn.insertAdjacentHTML('beforeend', `<span class="vcap">${v.title || 'Ver el video'}</span>`);
      btn.addEventListener('click', () => open(key, btn));
      // A muted preview of the MP4 plays inside the thumbnail while it is on screen,
      // so the card looks like a video and not like a static button.
      if (v.src && !reduce && !navigator.connection?.saveData) previews.push([btn, v]);
      const card = slot.closest('article');
      // With a video, the thumbnail goes to the top of the card and the "coming soon" line disappears.
      if (card && !reel && !slot.closest('.startup-card')) { card.insertBefore(btn, card.firstChild); slot.remove(); }
      else { slot.replaceWith(btn); }
    });
    // The preview file is only requested when the thumbnail gets close to the screen.
    if (previews.length && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => entries.forEach((e) => {
        const btn = e.target, v = previewOf.get(btn);
        let vid = $('video', btn);
        if (e.isIntersecting) {
          if (!vid) {
            vid = document.createElement('video');
            vid.muted = true; vid.loop = true; vid.playsInline = true; vid.preload = 'auto';
            vid.setAttribute('aria-hidden', 'true'); vid.src = v.src;
            vid.addEventListener('playing', () => vid.classList.add('on'), { once: true });
            btn.insertBefore(vid, btn.firstChild.nextSibling);
          }
          vid.play().catch(() => {});
        } else if (vid) vid.pause();
      }), { rootMargin: '200px 0px' });
      previews.forEach(([btn, v]) => { previewOf.set(btn, v); io.observe(btn); });
    }
    triggers.forEach((t) => {
      const v = lib[t.dataset.play];
      if (!v) { if (t.classList.contains('star-video')) t.hidden = true; return; }
      t.addEventListener('click', () => open(t.dataset.play, t));
    });
    $$('[data-dur]').forEach((d) => { const v = lib[d.dataset.dur]; if (v && v.duration) d.textContent = v.duration; });
  });
}

/* ---------------- Magnetic buttons ---------------- */
function magnetic() {
  if (reduce || !finePointer) return;
  $$('.s007,.s013,.s014,.s071,.s142,.s207,.s217,.car-btn,.star-play,.burger').forEach((b) => {
    const xTo = gsap.quickTo(b, 'x', { duration: 0.4, ease: 'power3.out' });
    const yTo = gsap.quickTo(b, 'y', { duration: 0.4, ease: 'power3.out' });
    b.addEventListener('pointermove', (e) => {
      const r = b.getBoundingClientRect();
      xTo((e.clientX - r.left - r.width / 2) * 0.22); yTo((e.clientY - r.top - r.height / 2) * 0.32);
    });
    b.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
  });
}

/* ---------------- Boot ---------------- */
// Boot in two steps so no single task blocks the page for long:
// 1) what is visible right away (points, menu, hero), 2) the rest when the browser is idle.
const host = $('#gl');
if (host) buildField(host);
menu();
hrows();
videos();
intro();
const later = window.requestIdleCallback || ((fn) => setTimeout(fn, 120));
later(() => {
  scrollScenes();
  later(() => {
    carousel();
    liveDemo();
    marquee();
    magnetic();
    measureKeys();
    ScrollTrigger.addEventListener('refresh', measureKeys);
    ScrollTrigger.refresh();
  }, { timeout: 1200 });
}, { timeout: 800 });
addEventListener('load', () => ScrollTrigger.refresh());
