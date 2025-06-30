# 🍺 Brewery App

Bienvenido a **Brewery App**, una aplicación web desarrollada con Angular para gestionar una tienda de cervezas artesanales. Permite explorar un catálogo interactivo, seleccionar productos, agregarlos al carrito de compras y disfrutar de una experiencia simple e intuitiva.

---

## 🚀 Características

- 🧾 **Catálogo de cervezas** con imagen, nombre, tipo, precio y disponibilidad.  
- 🏷️ **Descuentos automáticos** en productos destacados.  
- 🔢 **Selector de cantidad** con control dinámico de stock.  
- 🛒 **Carrito de compras** persistente durante la sesión.  
- 🌐 **Integración con API REST** para la carga de productos.

---

## ⚙️ Instalación y Ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/LeguizaFranco/brewery.git
   cd brewery
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Levantar el servidor de desarrollo:**
   ```bash
   ng serve
   ```
   Luego, abrí [http://localhost:4200](http://localhost:4200) en tu navegador.

---

## 🗃️ API REST Simulada

La aplicación utiliza un archivo `db.json` como fuente de datos para simular una API REST, utilizando [json-server](https://github.com/typicode/json-server).

### ▶️ Levantar el servidor de la API

1. Asegurate de tener `json-server` instalado globalmente:
   ```bash
   npm install -g json-server
   ```

2. Ejecutá el servidor desde la raíz del proyecto:
   ```bash
   json-server --watch db.json --port 3001
   ```

3. La API estará disponible en:
   ```
   http://localhost:3001/beers
   ```

El archivo `db.json` debe contener un array de cervezas con los atributos esperados por la app: `id`, `name`, `type`, `price`, `stock`, `image`, y `offer`.

---

## 🛠️ Tecnologías Utilizadas

- [Angular](https://angular.io/)
- [RxJS](https://rxjs.dev/)
- [Bootstrap](https://getbootstrap.com/) — Estilizado responsive
- [TypeScript](https://www.typescriptlang.org/)

---

## 👨‍💻 Autor

Desarrollado en el marco del seminario de Angular — **TUDAI**  
[Franco Leguiza](https://github.com/LeguizaFranco)

---

¡Salud! 🍻
