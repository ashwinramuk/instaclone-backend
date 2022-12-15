const express = require('express');
const PostsRoute = require('./routes/posts')
const app = express();
const cors = require('cors')
app.use(cors())
app.use(express.json());
app.use(express.urlencoded())

app.use("/api/posts",PostsRoute);

module.exports = app;
