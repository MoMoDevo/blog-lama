const Category=require("../models/categoryModel")
exports.createCategory=async(req,res)=>{
   
    try {
        const category= new  Category(req.body)
        const savedCategory=await category.save()
        res.send(savedCategory)
       

        
    } catch (error) {
        console.log("failed to create category")
    }
    
}

exports.getCategoris=async(req,res)=>{
    try {
        const categories=await Category.find()
        res.json(categories)
        


    } catch (error) {
        
    }
}