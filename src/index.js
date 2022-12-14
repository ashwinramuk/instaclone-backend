const app = require("./app.js")
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ashwinramuk:ashwinramuk@posts.hsqw5aq.mongodb.net/?retryWrites=true&w=majority',()=>{console.log("Database connection successfull")})


app.listen('8080',()=>{console.log("server is connected")})