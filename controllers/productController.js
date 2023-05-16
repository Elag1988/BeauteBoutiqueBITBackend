//Controller de los productos

const productModel = require("../models/productModel");

exports.getAllProducts = (req, res) => {
    productModel.find()
    .then(products => res.json(products))
    .catch(err => res.status(500).json({error:err.message}));
};

exports.createProducts =  (req, res) => {
    const {name,image,size, color,price,description } = req.body;
    const newProduct = new productModel({
        name,
        image,
        size,
        color,
        price,
        description
    });

    newProduct.save()
    .then(() => res.status(201).json({success:"created"}))
    .catch(err => res.status(500).json({error:err.message}));
}

exports.updateProduct = (req, res) => {
    const {id}= req.params;
    const { name,image,size, color,price,description } = req.body;
    productModel.findByIdAndUpdate( id , { name,image,size, color,price,description }, {new:true})
    .then(product => {
        if(!product)throw new Error(`product with ID ${id} not found`);
        res.status(200).json({product});
    })
    .catch(err => res.status(404).json({error:err.message}));
}

exports.deleteProduct = (req, res) => {
    const {id}= req.params;
    productModel.findByIdAndDelete(id)
    .then(product => {
        if(!product)throw new Error(`product with ID ${id} not found`);
        res.status(200).json({message:"Product deleted"});
    })
    .catch(err => res.status(404).json({error:err.message}));
}