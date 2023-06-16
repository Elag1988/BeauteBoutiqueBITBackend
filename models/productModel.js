//Modelo de Datos de los productos
const mongoose = require("mongoose");

const Uri = "Aqui va la Url de Altas o mongo local"

mongoose.connect(Uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Se conecto con base de datos de productos"))
.catch(err => console.log("Error de conexion con la base de datos de productos", err));

const userSchema = new mongoose.Schema({
    name: {type:String, required:true},
    size: {type:String, required:true},
    color: {type:String, required:true},
    price: {type:Number, required:true},
    description: {type:String, required:true},
}, {collection:"products"});

module.exports = mongoose.model('products', userSchema);