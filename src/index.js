const app = require("./app.js")
const mongoose = require('mongoose')
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI,()=>{console.log("Database connection successfull")})


app.listen(process.env.PORT||8080,()=>{console.log("server is connected")})