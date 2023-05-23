const express=require("express")
const router=express.Router()
const upload=require("../utils/multer")
const cloudinary=require("../utils/cloudinary")
const User=require("../models/userModel")
 
const { requireSignin, isAdmin } = require("../middelware/auth")
const Post=require("../models/postSchema")
const userModel = require("../models/userModel")


const{getAllposts,getCountOFthePosts,getSinlePost,editPost}=require("../controllers/postController")





 
 router.post("/",requireSignin,upload.single("image"),async(req,res)=>{
    const findAuthor=await User.findById(req.user)
    try {

        const result=await cloudinary.uploader.upload(req.file.path,{ folder: "blogs"})
 let neeepost=new Post({
    title:req.body.title,
    category:req.body.category,
    author:findAuthor,
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


 router.get("/all",getAllposts)
 router.get("/:id",getSinlePost)
 //edit& delete
 router.put("/edit/:id",requireSignin,editPost)
 

 //admin
 router.get("/all/count",requireSignin,isAdmin,getCountOFthePosts)



module.exports = router;