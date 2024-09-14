const express = require("express");
// const zod = require('zod')
const app = express();

const simpleIntr = 

app.get('/calculateSimpleinterest/:principle/:rate/:time',(req , res)=>{
    try{
       const principle = parseInt(req.params.principle);
       const rate = parseInt(req.params.rate);
       const time = parseInt(req.params.time);
       const SI = (principle * rate * time) / 100;
       res.json({simpleInterest:SI});

    }catch(err){
        res.json({msg:"invalid input"})
    }
})

app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running on port 3000");
    }  
});