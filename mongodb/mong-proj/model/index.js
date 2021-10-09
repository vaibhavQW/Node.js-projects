const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Edureka",{useNewUrlParser:true}, (error)=>{
    if(!error){
        console.log("Success Connected");
    }
    else{
        console.log("Error Connecting to database");
    }
});

const Course = require("./courses_model");