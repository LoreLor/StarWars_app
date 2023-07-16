# StarWars_app - UPSKILLING

<figure>
    <img src='./client/src/assets/banner.png' alt='banner'>
</figure>


# Objetivos teóricos a desarrollar

## Microservicios

* Facilita la escalabilidad y la hace más eficiente

* La capacidad de prueba de cada microservicio es mayor.

* El mantenimiento se hace más sencillo y eficiente.

* Permite que en un mismo proyecto coexistan distintas tecnologías: Múltiples lenguajes, bases de datos, protocolos, etc.

* Hace mucho más sencillo el desarrollo paralelo de las distintas funcionalidades de la aplicación y, además, permite que este desarrollo sea independiente.

* Permite que los despliegues sean independientes, lo que aumenta la tolerabilidad a fallos graves.


## Arquitectura de Microservicios:

* Node.js
* Express
* MongoDB
* Docker
* Docker Compose
* Google Cloud Platform MV

# Tareas de desarrollo
## Definir los conceptos de nuestro proyecto:

   * Problema: Introducción al problema y reglas de negocio
   * Modelos: Dominio y entidades
   * Servicios: Tecnologías y organización
   * Creacion de Contenedores: Docker
   * Gateway: Redireccion a los servicios 
   * Gestion de Contenedores: Docker-Compose
   * Despliegue: VM de Google Cloud Platform


### Sobre el Proyecto

_Expone listados de algunos personajes, planetas y films en los cuales intervinieron los personajes de Star Wars._
_Permitirá realizar busquedas por el nombre de cada una de las entidades. Filtrado de personajes segun el planeta de origen._

### Modelos

_Se utiliza base de datos NoSQL, en este caso MongoDB y ORM Mongoose, con clúster alojado en MongoDB Atlas._
_Los modelos para este proyecto son: Character, Film y Planet._
_Cada modelo incluye sus métodos estaticos._

### Servicios

#### characters
- Descripción : Este servicio soporta las peticiones referidas a los personajes de Star Wars.
- Tecnología : Api Rest, Node, Express, javascript.

- Funcionalidad : Manejo de tareas: Creación, Listado, Detalle y Borrado.

- Modelo : colección "characters" que maneja documentos de tipo “Character” que contienen referencias al planeta de nacimiento y a los films en los cuales intervino el personaje.

- Base de datos : MongoDB.


<p align="center" p=10>
    <img src='./client/src/assets/estructura.png' alt='estructura' />
</p>

#### Similares caracteristicas para los modelos: "films" y "planets.


### Gateway

- Descripción : Servicio encargado de centralizar las llamadas a los demás servicios a través de una URI que hace de entrada a esas peticiones.


- Tecnología : Api Rest, Node, Express, http-proxy-middleware.


- Funcionalidad : Se encarga de centralizar las llamadas a la aplicación en una URI principal que redirige las llamadas a los servicios configurados internamente.

#
#
