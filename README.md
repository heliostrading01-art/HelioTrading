# Helios Trading Systems — Landing Page

Landing page profesional para **Helios Trading Systems**, construida con React + Vite. Diseño basado en la identidad visual del logotipo Helios (paleta de azul marino oscuro `#0d1f3c` con acentos en azul celeste `#4a90d9`).

---

## Tecnologías

| Tecnología | Versión | Uso |
|---|---|---|
| React | 18+ | Componentes y estructura UI |
| Vite | 5+ | Bundler y dev server |
| Elementor CSS | Original | Estilos del diseño base |
| Vanilla CSS | — | Personalización de identidad visual |

---

## Instalación y desarrollo

### 1. Instalar dependencias
\`\`\`bash
npm install
\`\`\`

### 2. Servidor de desarrollo local
\`\`\`bash
npm run dev
\`\`\`
Abre en el navegador: **http://localhost:3000**

### 3. Build de producción
\`\`\`bash
npm run build
\`\`\`
Los archivos de producción quedan en la carpeta \`dist/\`.

### 4. Preview del build de producción
\`\`\`bash
npm run preview
\`\`\`

---

## Estructura del proyecto

\`\`\`
helios-landing/
│
├── index.html                  ← Entry point HTML (carga CSS globales y scripts)
├── vite.config.js              ← Configuración del bundler Vite
├── package.json                ← Dependencias y scripts npm
├── README.md                   ← Este archivo
│
├── src/                        ← Código fuente React
│   ├── main.jsx                ← Punto de entrada de React
│   ├── App.jsx                 ← Componente raíz, define el orden de secciones
│   ├── css/
│   │   └── custom-client.css   ← ⭐ ARCHIVO PRINCIPAL DE ESTILOS DEL CLIENTE
│   └── components/
│       ├── Header.jsx          ← Barra de navegación fija (logo + menú)
│       ├── Hero.jsx            ← Sección principal con video de fondo y banner
│       ├── Products.jsx        ← Tarjetas de productos
│       ├── Features.jsx        ← Sección de características
│       ├── Testimonials.jsx    ← Testimonios de clientes
│       ├── FAQ.jsx             ← Preguntas frecuentes (acordeón)
│       ├── ContactForm.jsx     ← Formulario de contacto/soporte
│       └── Footer.jsx          ← Pie de página con logo, links y redes sociales
│
└── public/                     ← Assets estáticos (servidos tal cual por Vite)
    ├── assets/
    │   ├── logo/
    │   │   └── Logo.jpg        ← ⭐ Logo Helios Trading Systems
    │   └── banners/
    │       └── Hands2.png      ← Imagen del hero (manos robot + humano)
    ├── css/                    ← Estilos Elementor + override del cliente
    │   ├── custom-client.css   ← ⭐ Variables de color y sobrescrituras visuales
    │   ├── main.css            ← CSS principal de Elementor
    │   ├── post-5531.css       ← Estilos de la página principal
    │   ├── post-998.css        ← Estilos del header de Elementor
    │   └── ...                 ← Otros estilos de plugins y widgets
    ├── fonts/                  ← Tipografías locales
    ├── images/                 ← Imágenes de secciones
    ├── js/                     ← Scripts de Elementor (jQuery, animaciones)
    └── media/
        └── 215698_small.mp4    ← Video de fondo del hero
\`\`\`

---

## Personalización

### 🎨 Cambiar colores
Toda la paleta está en **\`public/css/custom-client.css\`** en las variables CSS al inicio:

\`\`\`css
:root {
  --c-bg:           #04132c;           /* Fondo principal de la página */
  --c-surface:      #0a1d37;           /* Fondo de tarjetas/secciones */
  --c-primary-rgb:  63, 140, 215;      /* Azul celeste principal */
  --c-accent-rgb:   47, 125, 207;      /* Azul eléctrico de acento */
  --c-text:         #eff0f2;           /* Color de texto principal */
  --c-muted:        #3c587d;           /* Texto secundario */
}
\`\`\`

> El color del navbar (\`#0d1f3c\`) está en las reglas del header para coincidir exactamente con el fondo del logotipo.

### 📝 Cambiar textos
Edita el componente JSX correspondiente en \`src/components/\`:

| Sección | Archivo |
|---|---|
| Navegación / Logo | \`Header.jsx\` |
| Hero (título principal) | \`Hero.jsx\` |
| Productos y precios | \`Products.jsx\` |
| Características | \`Features.jsx\` |
| Testimonios | \`Testimonials.jsx\` |
| Preguntas frecuentes | \`FAQ.jsx\` |
| Formulario de contacto | \`ContactForm.jsx\` |
| Pie de página | \`Footer.jsx\` |

### 🖼️ Cambiar logo
Reemplaza \`public/assets/logo/Logo.jpg\`.
El CSS espera una imagen con fondo \`#0d1f3c\` para integrarse con la navbar.

### 🎬 Cambiar video del hero
Reemplaza \`public/media/215698_small.mp4\`.
Recomendado: MP4, 1920×1080, < 10MB.

### 🖼️ Cambiar imagen del hero
Reemplaza \`public/assets/banners/Hands2.png\`.
Recomendado: PNG oscuro o con transparencia, relación 16:9.

---

## Despliegue

El proyecto genera archivos estáticos con \`npm run build\`. La carpeta \`dist/\` puede desplegarse en:

- **Netlify** — arrastra y suelta la carpeta \`dist/\`
- **Vercel** — conecta el repositorio, build command: \`npm run build\`
- **GitHub Pages** — sube el contenido de \`dist/\` al branch \`gh-pages\`
- **Servidor propio** — copia \`dist/\` al directorio raíz del servidor web

> **Nginx:** Configura \`try_files $uri $uri/ /index.html;\` para el routing de SPA.

---

## Arquitectura técnica

### ¿Por qué Elementor CSS en un proyecto React?
El diseño original fue construido en WordPress/Elementor. Para preservar el 100% de la fidelidad visual, se portaron los archivos CSS de Elementor directamente a \`public/css/\`. El archivo \`custom-client.css\` es la capa de sobrescritura que aplica la identidad visual de Helios encima de la base de Elementor.

### Orden de carga de CSS (en \`index.html\`)
1. Estilos base de Elementor (\`main.css\`, \`frontend.min.css\`)
2. Estilos de widgets y plugins de Elementor
3. Estilos de posts específicos (\`post-5531.css\`, \`post-998.css\`)
4. **\`custom-client.css\`** ← personaliza y sobrescribe todo lo anterior

### Scripts de interactividad
Los scripts en \`public/js/\` proporcionan:
- Navbar sticky con efectos al hacer scroll
- Animaciones de entrada (scroll reveal)
- Slider del hero (Swiper.js)
- Acordeón del FAQ

---

## Notas para el desarrollador

- Los componentes React son **contenedores de HTML** que replican la estructura de Elementor. La lógica de UI la manejan los scripts de Elementor JS.
- Para agregar secciones: crea un componente en \`src/components/\` e impórtalo en \`App.jsx\`.
- El formulario de contacto (\`ContactForm.jsx\`) requiere un backend para envío de emails. Actualmente muestra el diseño estático.
- Las imágenes de productos están en \`public/images/\`. Actualiza las rutas en \`Products.jsx\` si las cambias.

---

## Créditos

- **Diseño original:** Elementor / WordPress
- **Migración a React/Vite y personalización visual:** Desarrollado por encargo
- **Cliente:** Helios Trading Systems
- **Año:** 2026
