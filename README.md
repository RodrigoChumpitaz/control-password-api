# Proyecto de Gestión de Información de Contraseñas

Este proyecto es una aplicación de servidor Node.js construida con TypeScript y Express. Proporciona una API para gestionar la información de contraseñas de los usuarios.

## Características Principales

- **Gestión de Contraseñas:** Los usuarios pueden almacenar información de contraseñas sugeridas y obtener una versión encriptada de la misma. La contraseña encriptada se almacena en la base de datos junto con la contraseña sugerida.

- **Encriptación de Contraseñas:** Las contraseñas sugeridas por los usuarios se encriptan utilizando un servicio de encriptación antes de ser almacenadas en la base de datos.

- **Validación de Contraseñas Encriptadas:** Antes de almacenar una contraseña encriptada, se valida que cumpla con un patrón específico. Si no lo hace, se devuelve un error.

- **Manejo de Errores Personalizado:** El proyecto incluye clases personalizadas para manejar errores y responder con mensajes de error detallados.

- **Registro de Actividad:** Se utiliza el middleware `morgan` para registrar las solicitudes HTTP en el servidor.

## Estructura del Proyecto

El proyecto sigue una estructura de diseño orientado a dominios, con la lógica de negocio encapsulada en el dominio `passwordInfo`. La lógica de aplicación se encuentra en `passwordInfo.application.ts`, que utiliza un repositorio para interactuar con la base de datos. El repositorio se implementa en `password.infraestructure.ts`, que utiliza Mongoose para interactuar con la base de datos MongoDB.

El proyecto también incluye una capa de infraestructura que contiene DTOs para mapear entre los modelos de dominio y los modelos de base de datos, y una capa de controladores que maneja las solicitudes HTTP y responde con los resultados de la lógica de aplicación.

## Cómo Empezar

Para empezar a utilizar este proyecto, clona el repositorio, instala las dependencias con `npm i` y ejecuta el servidor con `npm run dev`.