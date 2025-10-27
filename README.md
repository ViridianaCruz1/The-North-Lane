# 🛍 Perfumes de Diego

**Perfumes de Diego** es una aplicación web desarrollada para reemplazar un catálogo de perfumes estático en PDF, transformándolo en una experiencia de navegación **interactiva, moderna y eficiente**.  
El proyecto busca optimizar la comunicación **cliente–vendedor**, ofreciendo una interfaz clara, dinámica y adaptada a la atención personalizada sin necesidad de integrar una pasarela de pagos automática.

👉 [Ver proyecto en Vercel](https://perfumes-de-diego-catalogo.vercel.app)

---

## ✨ Características principales

- 🔎 **Filtrado avanzado:** por existencia, casa o categoría.
- 🏷️ **Ordenamiento dinámico:** por nombre, casa o precio (ascendente o descendente).
- 💬 **Búsqueda inteligente:** permite buscar perfumes por nombre o casa.
- 🧴 **Detalle del producto:** muestra el perfume con selección de mililitros y cantidad deseada.
- 🛒 **Gestión del pedido:** genera un resumen del carrito con total y envío directo a WhatsApp para coordinar el pedido.
- ⚡ **Interactividad total:** todas las funciones se ejecutan de forma dinámica sin recargar la página.

> El proyecto **no requiere autenticación de usuarios**, ya que está diseñado para ofrecer una experiencia rápida y directa de consulta y cotización.

---

## 🧠 Objetivo del proyecto

Transformar un catálogo tradicional en PDF en una aplicación web funcional que permita una interacción fluida, práctica y atractiva entre el vendedor y los clientes.  
El desarrollo pone en práctica conocimientos de **React, manejo de estado global, conexión con bases de datos (Supabase)** y **diseño frontend minimalista** con TailwindCSS.

---

## ⚙️ Tecnologías utilizadas

| Categoría                   | Herramientas       |
| --------------------------- | ------------------ |
| **Lenguaje principal**      | JavaScript         |
| **Framework / Librerías**   | React, TailwindCSS |
| **Base de datos / Backend** | Supabase           |
| **Despliegue**              | Vercel             |

---

## 🧩 Estructura general del proyecto

```bash
src/
├── components/ # Componentes reutilizables de la interfaz
├── context/ # Contextos globales (carrito, filtros, etc.)
├── functions/ # Conexión y lógica con Supabase
├── pages/ # Páginas principales de la app
├── ui/ # Elementos visuales y de estilo
└── App.jsx # Estructura principal
```

---

## 🚀 Instalación y ejecución local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tuusuario/Perfumes-de-Diego.git
   cd Perfumes-de-Diego
   npm install
   npm run dev
   http://localhost:5173
   ```

## 🎨 Diseño e identidad visual

El diseño busca transmitir elegancia, limpieza y claridad, inspirado en la estética de los catálogos de perfumería moderna.
La aplicación utiliza TailwindCSS para lograr una interfaz minimalista, responsiva y agradable a la vista.

  <img width="1920" height="962" alt="image" src="https://github.com/user-attachments/assets/ffea2c95-8f80-4084-82e1-772eea480d2f" />
