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

Los movimientos (fondo de puntos 3D, apariciones al hacer scroll, demo animada, carrusel y stack) viven en `src/fx.js`
y usan three.js y GSAP + ScrollTrigger. `fx.js` en la raíz es la versión empaquetada que carga la página.
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

## Páginas

La web se divide para que la portada sea corta y cada línea de servicio tenga su detalle:

| Página | Contenido |
|---|---|
| `index.html` | Inicio, 01 En acción, 02 Stack, 03 Servicios (resumen con enlaces), 04 Producto, 05 Portafolio, 06 Equipo, 07 Contacto |
| `catalogo.html` | Soluciones rápidas (Quick, 18) y Soluciones de negocio (Business, 30) |
| `migraciones.html` | 54 rutas de migración, con filtro por área |
| `enterprise.html` | Arquitecturas de referencia por industria y Startups |

- Todas comparten `site.css` (se descarga una vez y queda en caché) y `fx.js`. Las páginas de detalle no cargan el fondo 3D, por eso abren más rápido.
- Cada página trae el formulario de contacto. El formulario envía con FormSubmit a `admin@planetsteam.app`; la primera vez llega un correo de activación que hay que confirmar. Si el envío falla, abre el correo del usuario como respaldo.
