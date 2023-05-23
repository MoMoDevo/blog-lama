  
 const Post=require("../models/postSchema")
const { findById } = require("../models/userModel")


 exports.getAllposts=async(req,res)=>{
    try {
        const allOfThem=await Post.find({}).sort({ createdAt: -1 })
        res.json(allOfThem)
    } catch (error) {
        
    }
 }

 exports.getCountOFthePosts=async(req,res)=>{
    const countIt=await Post.find({}).count()
    res.json(countIt)
 }


 exports.getSinlePost=async(req,res)=>{
   try {
      const onePost=await Post.findById(req.params.id).populate("author","username").populate("category","name")
      res.json(onePost)


      
   } catch (error) {
      
   }
 }

 exports.editPost=async(req,res)=>{
   
      const post = await Post.findById(req.params.id);
      
      if (post.author.username === req.body.username) {
      
          const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedPost);


  
   
 }
 }
