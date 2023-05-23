const User = require("../models/userModel")

exports.getAllUsers=async(req,res)=>{
    try {
        const users=await User.find({})
        res.json(users)
        
    } catch (error) {
        
    }
}

exports.getCountOfUsers=async(req,res)=>{
    const numberOfthem=await User.find({}).count()
    res.json(numberOfthem)
}