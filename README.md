# Planet STEAM Labs

Sitio estático de servicios profesionales de software, datos e inteligencia artificial.

Web: https://planetsteam.github.io/planet-steam-labs/

## Editar y previsualizar

La fuente es `index.html` (incluye estilos e interacciones). Desde esta carpeta:

```powershell
python -m http.server 8090 --bind 127.0.0.1
```

Abra http://127.0.0.1:8090/. Para ver la página no hace falta instalar nada.

## Efectos (fx.js)

Los movimientos (fondo de puntos 3D, apariciones al hacer scroll, scroll suave, demo animada, carrusel y stack) viven en `src/fx.js`
y usan three.js, GSAP + ScrollTrigger y Lenis. `fx.js` en la raíz es la versión empaquetada que carga la página.
Si cambia `src/fx.js`, vuelva a generarla:

```powershell
npm install
npm run build
```

Sin `fx.js` la página sigue funcionando y mostrando todo su contenido, solo que sin animaciones.

## Publicar

GitHub Pages sirve la raíz de la rama `main`. Tras revisar los cambios, haga commit y push.
El formulario prepara un correo a admin@planetsteam.app; el visitante debe enviarlo desde su cliente de correo.
Las vistas gráficas son ilustrativas y las demos usan datos de ejemplo.
