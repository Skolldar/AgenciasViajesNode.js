//Importar Express y lo asignamos a la variable
const express = require('express');

//Este contiene una funcion para ejecutar express que estara asignado al app
const app = express();

//Definir el puerto
const port = process.env.PORT || 4000;

//La app arranca el servidor con la funcion llamada (.listen), le pasamos el port que queremos usar
//con el callback vemos si arranca bien o no.
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})