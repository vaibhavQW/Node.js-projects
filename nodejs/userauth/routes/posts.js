const router = require("express").Router();
const verify = require("./veriifyToken")

router.get("/", verify ,(req, res) =>{
    res.json({
        posts:{
            title:"My first post", 
            description:"random data you shouldn't access"
    }
 })
})