const connection = require("./model");
const express = require("express");
const app = express();
const path = require("path");
const expressHandlerbars = require("express-handlebars");
const bodyparser  = require("body-parser");
const CourseController = require("./controllers/courses")

app.use(bodyparser.urlencoded({
    extended : true
}));

app.set("views", path.join(__dirname, "/views/"));
app.engine("hbs", expressHandlerbars({
    extname:"hbs",
    defaultLayout:"mainlayout",
    layoutsDir:__dirname+"/views/layouts"
}));
app.set("view engine", "hbs");
app.use("/course", CourseController);

app.get("/", (req,res)=>{
    //res.send("<h1>HelloWorld</h1>");
    res.render("index", {})
})  
app.listen("3012", ()=>{
    console.log("Server Started")
})