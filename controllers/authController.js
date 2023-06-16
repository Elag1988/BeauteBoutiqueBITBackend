//Controller para la autentificacion del usuario

const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.JWT_SECRET;

const encodedSecret = Buffer.from(secret).toString("base64");

exports.authenticateUser = (req, res) => {
  const { username, password } = req.body;
  
  userModel.findOne({ username }).then((user) => {
    if (!user) {
        //Si no se encuentra el usuario , se devuelve un mensaje de error
      return res.status(404).json({ error: "User not found" });
    }
    bcrypt.compare(password, user.password, function(err, result) {
        if(err){
            res.status(500).json({ error:err.message});
        } else if(result) {
            const payload = {
              userId: user._id,
              username: user.username,
              role:user.role
            } ;
            //Si coincide la contraseña , el usuario fue autentificado exitosamente
            const token = jwt.sign(
              payload,
              encodedSecret,
              {expiresIn:"1h"}
            );
            res.status(200).json({message:"Authentication was successful", token});
        } else {
            //Si no coincide la contraseña , el usuario no pudo ser autentificado.
            res.status(401).json({error:"Authentication failed "});
        }
    });
  })
.catch((err) => res.status(500).json({ error:err.message}))
};