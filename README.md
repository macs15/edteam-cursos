# EDteam Cursos

  

Este proyecto es un CRUD sencillo hecho con **Next.js** que usa **JSON Server** como una fake Rest API.
En el proyecto puedes crear, actualizar, eliminar y/o listar cursos. Lo desarrollé intentando seguir un poco el sitio web `https://ed.team/`.
Además, este proyecto usa solo *componentes funcionales*, *hooks* y context para manejar el *ciclo de vida*, el *state* y para pasar *props* desde diferentes componentes.

  

## Scripts disponibles

  

En este proyecto, debes correr los siguientes comandos para el correcto funcionamiento de la app:

  

### `npm start`

  

Corre la app en modo desarrollo.

Abre [http://localhost:3000](http://localhost:3000) para ver la app en el navegador.

  

### `json-server --watch db.json --port 3001` o `npm run server`

  

Este script es necesario para el funcionamiento de la app. Inicia un fake server donde están los cursos alojados.
