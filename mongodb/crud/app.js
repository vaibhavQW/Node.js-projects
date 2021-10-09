const express = require("express");
const mongoose = require("mongoose");

const app = express();
const url = 'mongodb://localhost:27017/Alien';

mongoose.connect(url, {useNewUrlParser:true});
const conn = mongoose.connection;    //handle of db
conn.on("open", function(){
    console.log('connected....');
})

app.use(express.json())


const alienRouter = require("./routers/aliens");
app.use('/alien', alienRouter);




app.listen(9000, (err)=>{
    if(err){
        console.log("error in starting server")
    }
    else{
        console.log("Listening on port 9000")
    }
})