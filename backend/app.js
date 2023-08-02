const express=require('express');
const errorHandler = require('./middleware/errorHandler');
const app=express();

//server handling
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//middleware for error
app.use(errorHandler);
module.exports=app;