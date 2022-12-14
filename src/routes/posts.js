const Posts = require('../models/post')
const express = require("express")
const multer = require("multer")
const fileUpload = multer()
const router = express.Router();
router.get("/", async (req,res)=>{
    try{
        const posts = await Posts.find();
        res.status(200).json(posts)

    }catch(e){
        res.status(400).json({
            status:"Failed",
            message:e.message
        })
    } 
})
router.post("/", async (req,res)=>{
    try{
        console.log(req.body)
    }catch(e){
        res.status(400).json({
            status:"Failed",
            message:e.message
        })
    }
})

module.exports = router;
