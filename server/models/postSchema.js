const mongoose=require("mongoose")

const{Schema}=mongoose
const{ObjectId}=mongoose.Schema



const postShema=new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    
    },
    img:{
        type:String

    },

    cloudinary_id:{
        type:String
    },
    author:{
        type:ObjectId,
        ref:"User",
        
    },
    category:{
        type:ObjectId,
        ref:"Category",
 
    }
    
  
   
},{timestamps:true})
module.exports = mongoose.model("Post", postShema);