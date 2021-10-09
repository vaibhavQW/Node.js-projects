const express = require("express");
const app = express();
const cors = require("cors")
const {sup, how } = require("./middle")

app.use(sup);
app.use(cors());
app.get("/", how, sup, (req, res) =>{
    res.send({data:"hi"});
})

app.listen(3000, err=>{
    if(err)
      {
          console.log("there was a problem ",error)

      }

      console.log("listening on port 3000")
})