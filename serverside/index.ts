const express = require( "express" );
const app = express();
const testapikey = "absdljskdajldksjald"

app.get("/test/apikey=:apiKey/", (req, res) => {
    console.log(req.params.apiKey);
    if(req.params.apiKey == testapikey){
        res.send("aprove")
    }else{res.send("denied")}
   console.log("amir");
})

app.listen(5000);
console.log("server is on on port 5000")



