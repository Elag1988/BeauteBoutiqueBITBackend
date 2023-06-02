//Modelo de Datos de los usuarios
const mongoose = require("mongoose");

const Uri = "Aqui va la URL de Mongo Altas o mongo local"

mongoose.connect(Uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Se conecto con base de datos de usuarios"))
.catch(err => console.log("Error de conexion con la base de datos de usuarios", err));

const userSchema = new mongoose.Schema({
    name: {type:String, required:true},
    lastname: {type:String, required:true},
    username: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    profileavatar: {type:String},
    phonenumber: {type:String},
    address: {type:String},
    preferences: {type:Array}
}, {collection:"users"});

module.exports = mongoose.model('users', userSchema);