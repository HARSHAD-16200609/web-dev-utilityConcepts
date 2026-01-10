import express from "express"


const app = express();




app.get('/',(req,res)=>{
    console.log("user sent get ");


    res.send("URL SHORTNER");
    
})

app.listen(5000,()=>{
    console.log("server listening on port 5000");
    
})