# Videos de los proyectos

Cada ficha de la web tiene un espacio de video. Para mostrar uno, agrega una entrada en `videos.json`
usando como clave el id de la ficha:

- Quick Solutions: `q01` … `q18`
- Business Solutions: `c01` … `c30`
- Enterprise Solutions: `e01` … `e05`
- Startups: `mvp`, `proinnovate`
- Producto propio (Planet STEAM): `producto`

Dos formas de agregar un video:

```json
{
  "c01": { "src": "assets/videos/c01-asistente.mp4", "poster": "assets/videos/c01-asistente.jpg", "title": "Asistente con IA en Azure", "duration": "1:12" },
  "e03": { "youtube": "dQw4w9WgXcQ", "title": "Financial Intelligence Platform", "duration": "2:40" }
}
```

- `src` + `poster`: video MP4 guardado en esta carpeta. Ideal para clips cortos (menos de 1–2 minutos y ~20 MB).
  GitHub no acepta archivos de más de 100 MB.
- `youtube`: el id del video en YouTube (lo que va después de `v=`). Ideal para videos largos; puede ser "no listado".
- `title` y `duration` son opcionales.

Las fichas sin entrada muestran "Video del proyecto · próximamente". Los videos solo se descargan cuando
alguien presiona play, así que agregarlos no hace más lenta la página.
