# Nico Paulis — portfolio audiovisual

Sitio estático responsive con portfolio, playlist de YouTube, proyectos enlazados a Behance, servicios, planes mensuales inmobiliarios y formulario que prepara un mensaje de WhatsApp.

## Archivos

- `index.html`: contenido y estructura de la web.
- `styles.css`: estilos para escritorio y celular.
- `script.js`: menú móvil y formulario de consulta.
- `assets/`: imágenes del portfolio.

## Abrir

Abrí la carpeta completa en Visual Studio Code. Para que YouTube pueda identificar el sitio, no abras `index.html` con doble clic: iniciá la web por HTTP con las instrucciones de abajo.

## Contacto

El formulario abre WhatsApp al número configurado en `script.js` (formato internacional, sin `+`, espacios ni guiones). El botón de packs completa el tipo de servicio para el formulario. Los precios son referencias editables.

Los proyectos de Behance llevan a sus páginas públicas. La sección Motion / Film muestra cinco videos; los que no admiten reproducción incrustada abren su video original en YouTube.

## Ver YouTube en local

En VS Code, abrí **Terminal → New Terminal**, ejecutá `python3 -m http.server 8000` desde esta carpeta y visitá `http://127.0.0.1:8000`. Para detener el servidor, presioná `Ctrl+C` en la terminal. Si publicás el sitio en un hosting, el reproductor también funcionará desde esa dirección web.

Si abrís `index.html` como archivo (`file://`), YouTube puede devolver el error 153 porque no recibe un origen web válido.
