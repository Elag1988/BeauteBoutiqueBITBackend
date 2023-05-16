//Modelo de Datos de los usuarios
const mongoose = require("mongoose");

const Uri = //Aqui va la uri de mongoAltas o mongo local

mongoose.connect(Uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Se conecto con base de datos"))
.catch(err => console.log("Error de conexion con la base de datos", err));

const userSchema = new mongoose.Schema({
    name: {type:String, required:true},
    image: {type:String},
    size: {type:String, required:true},
    color: {type:String, required:true},
    price: {type:Number, required:true},
    description: {type:Array},
}, {collection:"products"});

module.exports = mongoose.model('products', userSchema);