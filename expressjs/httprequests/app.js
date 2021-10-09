const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    console.log(req.headers)
    console.log(req.url);
    console.log(req.ip)
    console.log(req.hostname);
    console.log(req.method) //get
    console.log(req.protocol) //http https
    console.log(req.path) //just the path part of url
    console.log(req.subdomains) //test.sales.example.com['text, 'sales]
    console.log(req.query)  //querystring
    console.log(req.params)  //user/72, //product/234234
    //app.get("/user/:id")
    //req.params.id
    res.status(404).end()
})

app.listen(3000, err=>{
    if(err)
      {
          console.log("there was a problem ",error)

      }

      console.log("listening on port 3000")
})