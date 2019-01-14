var HTTP_PORT=process.env.PORT || 8080;
var express = require ("express");
var app = express();

app.get("/", (req,res)=> {

    res.send("Aysel Osmanova-123615163");

});

app.listen(HTTP_PORT);