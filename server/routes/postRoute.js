const express=require("express")
const router=express.Router()
const upload=require("../utils/multer")
const cloudinary=require("../utils/cloudinary")

const Post=require("../models/postSchema")
 
 router.post("/",upload.single("image"),async(req,res)=>{
    try {

        const result=await cloudinary.uploader.upload(req.file.path,{ folder: "products"})
let neeepost=new Post({
    title:req.body.title,
    img:result.secure_url,
    cloudinary_id:result.public_id
})

const savdPost=await neeepost.save()
res.send(savdPost)
console.log("created")

        
    } catch (error) {
        console.log("not created")
        
    }
 })




module.exports = router;