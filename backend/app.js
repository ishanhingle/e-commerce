const express=require('express');
const errorHandler = require('./middleware/errorHandler');
const app=express();

//server handling
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//middleware for error
app.use(errorHandler);
module.exports=app;