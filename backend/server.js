const dotenv=require('dotenv');
dotenv.config();
const app=require('./app');
const mongoose=require('mongoose');
const session=require('express-session');
const LocalStratgy=require('passport-local')
const passport=require('passport');
const passportLocalMongoose=require('passport-local-mongoose');
const errorHandler=require('./middleware/errorHandler');

const productRoute=require('./routes/productRoute');
const userRoute=require('./routes/userRoute');

const User=require('./models/userModel');


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
 app.use(errorHandler);