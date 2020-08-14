const express =require("express");
const app =express();
const path= require('path');
const cors=require('cors');
const { User } = require("./model/User");



const config=require('./config/key');
const cookieParser=require('cookie-parser');
//middleware
app.use(cors())
app.use(express.json());
app.use(cookieParser())

//mongoose req
const mongoose=require("mongoose");
const connect =mongoose.connect(config.mongoURI,
    {}).then(()=>console.log("Mongodb Connected"))
    .catch(err=> console.log(err));

//coonect to router
app.use('/api/users',require('./routes/users'));

    app.listen(5004,()=>{
        console.log("server started")
    })
