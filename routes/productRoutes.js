//Routing de productos
const express = require("express");

const router = express.Router();

//importar el productController
const productController = require("../controllers/productController");

router.get('/', productController.getAllProducts);

router.post('/', productController.createProducts);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;