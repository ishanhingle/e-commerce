const app=require('./app');
const dotenv=require('dotenv');
dotenv.config({path:"backend/.env"});
const mongoose=require('mongoose');
const session=require('express-session');
const LocalStratgy=require('passport-local')
const passport=require('passport');
const passportLocalMongoose=require('passport-local-mongoose');

const productRoute=require('./routes/productRoute');
const userRoute=require('./routes/userRoute');

const User=require('./models/userModel');

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
    console.log("serverstarted");
})
 
//initializing session
app.use(session({
    secret:"itisasecret"
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStratgy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//routing
app.use('/products',productRoute)
app.use('/user',userRoute);

//unhandled rejection
process.on("unhandledRejection",(err)=>{
    console.log(err.message);
    console.log("closing server due to unhandled rejection")
    server.close(()=>{
        process.exit(1);
    })
})
