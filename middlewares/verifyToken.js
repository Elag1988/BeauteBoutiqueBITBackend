const jwt = require("jsonwebtoken");
require("dotenv").config();
const decodedSecret = Buffer.from(process.env.JWT_SECRET,"base64").toString("utf-8");

exports.verifyToken = (req, res, next) => {
    const authorizationHeaders = req.headers.authorization;
    if(!authorizationHeaders) {
        return res.status(401).json({error:"Not token provided!!!"});
    } 

    const token = authorizationHeaders.replace("Bearer ", '');





    jwt.verify(token, decodedSecret,(err,decoded) => {
        
        if(err)  {
            console.log(decoded,token, process.env.JWT_SECRET)
            return res.status(401).json({error:"Invalid Token..."});
        }

        req.user = decoded;
        next();
    });

};