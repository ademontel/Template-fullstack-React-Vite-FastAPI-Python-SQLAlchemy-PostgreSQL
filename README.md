# React + Vite

Este proyecto es una aplicación frontend construida con **React** y **Vite**, y preparada para ejecutarse dentro de un contenedor **Docker**.

## 🚀 Tecnologías

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Docker](https://www.docker.com/)

## 🛠️ Instalación local

### Clonar el repositorio

```bash
git clone https://github.com/ademontel/proyecto-sin-nombre-1.git
cd proyecto-sin-nombre-1
```
### Compilar el contenedor de Docker
```
docker-compose up --build
```
### Visualizar en:
```
http://localhost:5173
```
### Estructura del proyecto:
```css
📁 src/                → Código fuente de la app React  
📄 Dockerfile          → Define cómo se construye el contenedor  
📄 docker-compose.yml  → Define los servicios a levantar  
📄 vite.config.js      → Configuración de Vite  
📄 package.json        → Dependencias y scripts
```
### 🐳 Notas sobre Docker
node_modules/ está ignorado y se crea dentro del contenedor.

Se usa un volumen nombrado para evitar conflictos entre dependencias de Windows y Linux.
