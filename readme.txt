proceso de instalación del backend con node.js

-npm init -y
poniendo estos comandos va a aparecer el package.json y el node_modules
-npm i express
express es esencial para proyectos backend porque simplifica la creación y gestión de servidores, rutas, middlewares y APIs, ahorrando tiempo y código en comparación con el manejo manual de solicitudes HTTP.
-npm i nodemon -D
esta dependencia sirve para actualizar en tiempo real el servidor.
-npm i Morgan
esta dependencia nos ayuda a visualizar las peticiones en la consola
-npm i mongoose
es un modulo que nos permite conectarnos a mongodb y a nuestros datos


-dentro de la carpeta models (la roja)
-crearemos el archivo user.model.js
este archivo sirve para espicificarle a mongoDB los datos que vamos guardando, con esto estaremos creando una estructura fija, una especie de tabla