 const express = require('express');
 const app=express();
 const DbConnect = require("./config/db");
 const cors = require('cors');

 DbConnect();
 const userRoute=require("./routes/userRoutes");
 app.use(express.json());
 app.use(cors());
 app.use("/api/v1",userRoute);
 //hello 
 
 app.listen(3001,(req,res)=>{
    console.log("server is runnign");
 })