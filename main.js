//Fichero principal del proyecto
//guarda en la constante express la libreria express
const express = require("express");


//Se guardan en la constante app todos los metodos de la libreria express
const app = express();

//Creacion de la constante puerto
const port = 3000;

//creacion de la constante userDB y productDB

const userDB = '/api/users';
const productDB = '/api/products';

//creacion de la constante userRoutes y productRoutes
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

app.use(express.json());

//ruta para acceso a la infornacion de la base de datos

app.use(userDB, userRoutes);
app.use(productDB,productRoutes)

app.listen(port, () => {console.log("El servidor se ejecuta en http://localhost:" + port)})
