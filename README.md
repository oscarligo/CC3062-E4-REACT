# App de Películas (React + TypeScript + Vite)
#

Esta es una aplicación web para explorar películas, ver detalles y consultar su calificación. Desarrollada con **React**, **TypeScript** y empaquetada con **Vite**, consume los datos directamente de la API de TMDB (The Movie Database).

## Propósito y contenido

El propósito de este proyecto es demostrar la construcción de una SPA   utilizando las mejores prácticas de React. La aplicación cuenta con las siguientes características:

- **Exploración de Películas**: Listado de películas populares y mejor calificadas.
- **Detalle de Película**: Vistas dedicadas para cada película con información de rating, pósters y tráilers integrados.
- **Modo Oscuro/Claro**: Soporte para temas integrado a través de React Context.

- **Componentes validados con PropTypes**: Se han definido PropTypes para asegurar la correcta transferencia de datos en los siguientes componentes:
  - `MovieCard`: Componente principal para mostrar la información básica de una película. Valida la estructura del objeto `movie` (requiere `id`, `title`, `vote_average`, `release_date`).
  - `LoadingSpinner`: Componente reutilizable para indicar estados de carga. Acepta y valida un `message` de tipo string opcional.
  - `ErrorMessage`: Componente para mostrar errores a lo largo de la aplicación. Acepta y valida un mensaje de `error` y una función opcional `onRetry`.

## Organización del proyecto


El proyecto sigue una arquitectura modular y organizada por características dentro de la carpeta `src/`:

```text
src/
 ├── assets/        # Imágenes, iconos y recursos estáticos.
 ├── components/    # Componentes UI reutilizables.
 ├── context/       # Estados globales de React.
 ├── hooks/         # Custom hooks para lógica de negoci.
 ├── layouts/       # Estructuras principales de vista.
 ├── pages/         # Vistas/Rutas de la aplicación.
 └── types/         # Definiciones de tipos e interfaces de TypeScript.

```
## Requisitos previos

- Tener Docker y Docker Compose instalados.

- Contar con una API Key de TMDB.

- Copiar el archivo de variables de entorno de ejemplo y rellenarlo localmente

## Ejecutar el proyecto

El proyecto está configurado con Docker usando escenarios multicapa (multi-stage) tanto para desarrollo como para producción.

### Modo de desarrollo

Por defecto, el servidor se levantará en modo de desarrollo al utilizar:

```
docker-compose up --build
```

### Modo de producción

Si se desea levantar un contenedor más ligero para producción, el comando es: 

```
docker-compose -f docker-compose.yml -f docker-compose.production.yml up --build -d
```