//Modelo de Datos de los usuarios
const mongoose = require("mongoose");

const Uri = "Aqui va la Url de Altas o mongo local"

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
    profileavatar: {type:String, default: ""},
    phonenumber: {type:String, default:""},
    address: {type:String, default:""},
    role: {type:String, default:"user"}
}, {collection:"users"});

module.exports = mongoose.model('users', userSchema);