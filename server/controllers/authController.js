const User=require("../models/userModel")
const bcrypt=require("bcryptjs")

exports.register=async(req,res)=>{
    const{username,email,password}=req.body
    try {

        const  salt = bcrypt.genSaltSync(10);
const  hash = bcrypt.hashSync(req.body.password, salt);
        const user=await new User({
            username:req.body.username,
            email:req.body.email,
            password:hash
            
        }).save()

        res.send(user)


        
    } catch (error) {
        
    }
}
