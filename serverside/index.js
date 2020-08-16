"use strict";
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var testapikey = "absdljskdajldksjald";
app.get("/test/apikey=:apiKey/", function (req, res) {
    console.log(req.params.apiKey);
    if (req.params.apiKey == testapikey) {
        res.send("aprove");
    }
    else {
        res.send("denied");
    }
    console.log("amir");
});
app.listen(port);
console.log("server is on on port " + port);
