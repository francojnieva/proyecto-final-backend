# MotoFly: proyecto de un e-commerce
Este repositorio contiene el código del backend de un ecommerce, que forma parte de la presentación final del curso en Rolling Code School. El proyecto está construido utilizando las siguientes tecnologías principales: NodeJS, Express y MongoDB para la base de datos.
## Tecnologías Utilizadas
- NodeJS: Plataforma de tiempo de ejecución de JavaScript que permite construir aplicaciones de red escalables.

- Express: Marco de aplicación web de Node.js que simplifica la creación de API y rutas.

- MongoDB: Base de datos NoSQL que se utiliza para almacenar y gestionar los datos de la aplicación.

- Git: Sistema de control de versiones utilizado para el seguimiento y gestión del código fuente

- Trello: Herramienta de gestión de tareas utilizada para organizar y seguir el progreso del proyecto.

- Metodología SCRUM: Marco de trabajo ágil utilizado para la gestión y planificación del proyecto.

## Características Principales
### Registro
El proceso de registro de usuarios implica que los datos ingresados en el formulario se envían a una ruta específica en el backend, donde son procesados por su controlador correspondiente. Los datos se almacenan en la base de datos, y la contraseña se encripta utilizando Bcrypt para garantizar la seguridad de la información.

### Login
Cuando un usuario intenta iniciar sesión, los datos ingresados se envían a su ruta correspondiente en el backend. El controlador procesa los datos y los compara con la información almacenada durante el registro. Si los datos son correctos, se genera un token utilizando Json Web Token (JWT), lo que permite la autenticación del usuario en las rutas protegidas.

### Contacto
Los datos ingresados en los campos del formulario de contacto son enviados a su ruta correspondiente en el backend. Desde allí, el controlador procesa los datos y los almacena en la base de datos para su posterior uso.

### Administración
Los administradores tienen la capacidad de agregar nuevos productos a través de un formulario dedicado. Los datos ingresados se dirigen a la ruta y controlador correspondientes en el backend. Además, se proporciona un tablero de administración que implementa operaciones CRUD (Crear, Leer, Actualizar, Eliminar). Cada operación se comunica con la base de datos utilizando los verbos HTTP adecuados (GET, POST, PUT, PATCH, DELETE).

## Integrantes del Proyecto
- Franco Nieva

- Luis López

- Erika Cruz

- Belén Gómez

- Carlos Avanzini

**Nota**: Este repositorio contiene el código correspondiente al backend del ecommerce. Para acceder al frontend de la aplicación, consulte el repositorio: [Frontend del ecommerce](https://github.com/ErikaCV/proyecto-final.git)
