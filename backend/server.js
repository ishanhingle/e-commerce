const app=require('./app');
const dotenv=require('dotenv');
dotenv.config({path:"backend/.env"});
const mongoose=require('mongoose');
const productRoute=require('./routes/productRoute');

//uncaughtException
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });

//mongoose connect
 mongoose.connect(process.env.MongoURL).then(console.log('database connected'))

 //server starting
const server=app.listen(process.env.PORT,(req,res)=>{
    console.log("server started");
})
 
//handling request


//routing
app.use('/products',productRoute)

//unhandled rejection
process.on("unhandledRejection",(err)=>{
    console.log(err.message);
    console.log("closing server due to unhandled rejection")
    server.close(()=>{
        process.exit(1);
    })
})
