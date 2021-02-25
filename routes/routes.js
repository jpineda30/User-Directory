var path = require("path");
var axios = require("axios");

module.exports = (app)=>{
    

    app.get("/",(req, res)=>{

        res.sendFile(path.resolve(__dirname + "./../public/main.html" ));

    });

    app.get("/employees",(req, res)=>{

        axios.get('https://randomuser.me/api/?results=5').then((result)=>{
            
            res.send(result.data);


        }).catch((err)=>{
            res.send("error" + err);
        });

      
               

    });

}