const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const testapikey = "absdljskdajldksjald"

app.get("/test/apikey=:apiKey/", (req:any, res:any) => {
    console.log(req.params.apiKey);
    if(req.params.apiKey == testapikey){
        res.send("aprove")
    }else{res.send("denied")}
   console.log("amir");
})


app.listen(port);
console.log(`server is on on port ${port}`)



