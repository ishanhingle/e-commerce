const app=require('./app');
const dotenv=require('dotenv');
dotenv.config({path:"backend/.env"});
const mongoose=require('mongoose');
const productRoute=require('./routes/productRoute');

//mongoose connect
 mongoose.connect(process.env.MongoURL).then(console.log('database connected'))

 //server starting
app.listen(process.env.PORT,(req,res)=>{
    console.log("server started");
})
 
//handling request


//routing
app.use('/products',productRoute)

