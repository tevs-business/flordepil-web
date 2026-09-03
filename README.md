# FLORDEPIL — Landing Page

Landing page mobile-first para FLORDEPIL, estudio de estética y tratamientos de belleza. Diseño en tonos verde agua / menta / crema inspirados en el logo, con foco en conversión por WhatsApp.

## 📁 Estructura del proyecto

```
flordepil/
├── index.html              → toda la landing (11 secciones)
├── css/
│   └── styles.css          → estilos, tokens de diseño, animaciones
├── js/
│   └── script.js           → interacciones + configuración de WhatsApp
├── images/
│   ├── logo.png             → logo recortado desde tu Instagram
│   ├── favicon.png / favicon-32x32.png
│   ├── tratamientos/        → (vacía) para tus fotos de servicios
│   ├── galeria/              → (vacía) para tus fotos de la galería
│   └── testimonios/          → (vacía) si querés agregar fotos de clientas
└── README.md                 → este archivo
```

## 🚀 Cómo verlo en tu computadora

1. Descomprimí la carpeta `flordepil`.
2. Abrí `index.html` haciendo doble clic (funciona sin instalar nada), o para probar todas las funciones igual que en producción, corré un servidor local:
   ```
   cd flordepil
   python3 -m http.server 8080
   ```
   y entrá a `http://localhost:8080` en el navegador.

## ✏️ Lo primero que tenés que personalizar

### 1. Número de WhatsApp
Abrí `js/script.js` y en las primeras líneas cambiá:
```js
const WHATSAPP_NUMBER = "5491100000000";
```
Poné tu número real con código de país, sin `+` ni espacios ni guiones. Ejemplo para Argentina: `5492645123456`.

Los mensajes predefinidos para cada botón también están ahí arriba, en `WHATSAPP_MESSAGES` — podés editar el texto de cada uno.

### 2. Logo
Ya está cargado el logo recortado desde tu perfil de Instagram (`images/logo.png`). Si tenés el archivo original en alta calidad, reemplazá ese archivo por el tuyo (mismo nombre) para mejor nitidez.

### 3. Fotos reales
Todas las imágenes de tratamientos, galería e Instagram son fotos de stock (Unsplash) que se cargan desde internet, solo como referencia visual. Para poner tus propias fotos:
1. Guardá tus fotos en `images/tratamientos/`, `images/galeria/`, etc.
2. En `index.html`, buscá cada etiqueta `<img src="https://images.unsplash.com/...">` y reemplazá el `src` por la ruta local, por ejemplo:
   ```html
   <img src="images/tratamientos/depilacion.jpg" alt="Depilación definitiva">
   ```
3. Para la galería (sección `#galeria`), también actualizá el atributo `data-full` de cada botón con la imagen en tamaño grande.

### 4. Dirección y horarios
Buscá `[DIRECCIÓN DE FLORDEPIL]` y `[HORARIOS]` en `index.html` (aparecen en la sección de ubicación y en el footer) y reemplazalos por los datos reales.

### 5. Mapa
En la sección de ubicación hay un `<iframe>` de Google Maps apuntando a una búsqueda genérica por "FLORDEPIL". Para un mapa preciso:
1. Buscá tu local en [Google Maps](https://maps.google.com).
2. Tocá **Compartir → Insertar un mapa** y copiá el link que te da (el que está dentro de `src="..."`).
3. Reemplazá el `src` del `<iframe>` en `index.html`.

### 6. Instagram y TikTok
Reemplazá `https://instagram.com/flordepil` y `https://tiktok.com/@flordepil` por tus enlaces reales en `index.html` (aparecen en el footer, la sección de Instagram y el botón flotante si corresponde).

### 7. Testimonios
Los testimonios actuales son de ejemplo. Reemplazá el texto y el nombre en la sección `<section class="section testimonials">` por comentarios reales de tus clientas (con su autorización).

## 🎨 Personalizar colores

Todos los colores están centralizados como variables al principio de `css/styles.css`:
```css
--mint-pale:   #EFF9F4;
--mint-soft:   #DCF1E7;
--aqua:        #9FDCC7;
--aqua-deep:   #4E9C82;
--aqua-ink:    #2F5B4E;
--cream:       #FBF8F2;
--stone:       #6C766F;
--ink:         #26302B;
```
Cambiando estos valores se actualiza toda la paleta del sitio de forma consistente.

## 🌐 Publicar el sitio (deploy)

Opciones gratuitas y simples:

**Netlify (más fácil):**
1. Entrá a [netlify.com](https://netlify.com) y creá una cuenta gratis.
2. Arrastrá la carpeta `flordepil` completa a la página de Netlify ("Deploy manually").
3. Netlify te da una URL pública al instante. Podés conectar tu propio dominio después.

**GitHub Pages:**
1. Subí la carpeta `flordepil` a un repositorio de GitHub.
2. Andá a **Settings → Pages** y activá GitHub Pages sobre la rama `main`.
3. Tu sitio queda publicado en `https://tuusuario.github.io/tu-repo`.

## ✅ Funcionalidades incluidas

- Diseño mobile-first, responsive en todos los tamaños de pantalla.
- Botón flotante de WhatsApp + barra fija de "Reservar turno" en mobile.
- Animaciones suaves al hacer scroll (se desactivan automáticamente si el usuario tiene activada la reducción de movimiento en su sistema).
- Galería con lightbox (click para ampliar imagen).
- Menú mobile tipo hamburguesa.
- Etiquetas SEO básicas y Open Graph para compartir en redes.
- Accesibilidad: foco visible en teclado, textos alternativos en imágenes, roles ARIA en el menú y la galería.

## 🔧 Soporte

Este proyecto es HTML, CSS y JavaScript puro (sin frameworks ni build step), así que cualquier desarrollador puede editarlo directamente con un editor de texto.
