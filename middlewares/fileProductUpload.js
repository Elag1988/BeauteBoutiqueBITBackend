const multer = require("multer") ;


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/products/");
    },
    filename: (req, file, cb) => {
        const extension = file.mimetype.split('/')[1]
        cb(null, file.originalname +"."+ extension);
    }
});

const fileFilter =  (req, file, cb) => {

    const allowTypes = ["image/jpeg", "image/png"];
    if(!allowTypes.includes(file.mimeType)) {
        const error = new Error("Tipo de Archivo no admitido");
        error.code = "LIMIT_FILE_TYPES";
        return cb(error,false);
    }

    cb(null, true);
}



const upload = multer({storage}).single("image")
module.exports = {upload};