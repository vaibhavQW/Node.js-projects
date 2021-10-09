const epxress = require("express");
const mongoose = require("mongoose");
const router = epxress.Router();

const CourseModel = mongoose.model("Course")

router.get("/list", (req, res)=>{
    CourseModel.find((error, docs)=>{
        if(!error){
            console.log(docs);
            res.send("Course Controller");
        }
        else{
            res.send("error")
        }
    })
    
});

module.exports = router;