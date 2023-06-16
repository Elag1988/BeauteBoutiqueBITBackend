//Routing de usuarios
const express = require("express");

const router = express.Router();

// Importar el authController

const authController = require("../controllers/authController");

//importar el userController
const userController = require("../controllers/userController");

router.get('/', userController.getAllUsers);

router.get("/find/:username",userController.getOneUser);

router.post('/create', userController.createUser);

router.post("/login", authController.authenticateUser);

router.put('/update/:id', userController.updateUser);

router.delete('/delete/:id', userController.deleteUser);

module.exports = router;