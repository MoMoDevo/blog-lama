const mongoose=require("mongoose")

const{Schema}=mongoose


const userSchema=new Schema({
    username:{
        type:String,
        unique:true
      
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        default:""
        
    },
role:{
    type:Number,
    default:0,
}
   
})
module.exports = mongoose.model("User", userSchema);
 