const express = require("express");
const app = express();


app.get("/", (req, res)=>{
    console.log(req.url)
    res.send("<h1>Hello on the other side</h1>");
})

app.get("/old", (req, res)=>{
    res.redirect(301, "/new");
})

app.get("/new", (req, res)=>{
    res.send("<h2>NEW</h2>")
})

app.listen(3000, err=>{
    if(err)
      {
          console.log("there was a problem ",error)

      }

      console.log("lidtening on port 3000")
})