# 📁 Carpeta de Assets del Cliente

Aquí colocas todos los recursos personalizados del cliente.
Esta carpeta es independiente de los archivos clonados originales.

---

## 📂 Estructura

```
assets/
├── logo/          ← Logo del cliente (PNG, SVG, etc.)
│                    Ejemplo: logo-principal.png, logo-blanco.svg
│
├── banners/       ← Imágenes de banner/hero para la página
│                    Ejemplo: banner-hero.jpg, banner-mobile.jpg
│
└── icons/         ← Íconos personalizados si son necesarios
                     Ejemplo: icono-trading.svg
```

---

## 🔗 Cómo referenciarlos en index.html

Para usar una imagen desde esta carpeta en el HTML:

```html
<!-- Logo -->
<img src="assets/logo/logo-principal.png" alt="Logo del cliente" />

<!-- Banner hero -->
<img src="assets/banners/banner-hero.jpg" alt="Banner principal" />
```

---

## ✅ Formatos recomendados

| Elemento | Formato recomendado |
|----------|---------------------|
| Logo     | SVG o PNG con fondo transparente |
| Banner   | JPG o WebP (optimizado para web) |
| Íconos   | SVG                 |

