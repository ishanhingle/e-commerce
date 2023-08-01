const express=require('express');
const app=express();

//server handling
app.use(express.urlencoded({extended:true}));
app.use(express.json());


module.exports=app;