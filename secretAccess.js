import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var logStatus=false;
app.use(bodyParser.urlencoded({extended:true}));

function logger(req,res,next){
  console.log(req.body);
  if(req.body["pswd"]=="ILoveProgramming"){
      
      logStatus=true;
  }
  next();

}

app.use(logger)

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/secretLogin.html")
})

app.post("/check",(req,res)=>{
   

    if(logStatus)
{
    res.sendFile(__dirname + "/public/secretAccess.html");
}
else{
    res.sendFile(__dirname + "/public/secretLogin.html");
}
  
});

//checking the log status to access the html files



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
