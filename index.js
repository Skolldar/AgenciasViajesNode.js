//Importar Express y lo asignamos a la variable
// const express = require('express');verion JS
import express  from "express"; // version import
import router from "./routes/index.js";
import db from "./config/db.js";

//Este contiene una funcion para ejecutar express que estara asignado al app
const app = express();

//CONECTAR DB
db.authenticate()
    .then(() => console.log('BASEDATOS CONNECTED')) //se ve el resultado en la terminal
    .catch( error => console.log(error));

//Definir el puerto
const port = process.env.PORT || 4000;

//Habilitaar PUG
app.set('view engine', 'pug');

//Obtener el ano actual
app.use((req, res, next) => {
    const year = new Date();

    res.locals.actualYear =  year.getFullYear();
    next();
})

//Definir la carpeta PUBLICA
app.use(express.static('public'));

//Agg router
app.use('/', router); //soporta todos get,port,put,push,delete


//La app arranca el servidor con la funcion llamada (.listen), le pasamos el port que queremos usar
//con el callback vemos si arranca bien o no.
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})