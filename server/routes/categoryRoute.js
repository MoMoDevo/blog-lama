const express=require("express")
const router=express.Router()
const { createCategory,getCategoris } = require("../controllers/categoryController");
const {requireSignin,isAdmin}=require("../middelware/auth")


//router.post("/",createCategory)
router.get("/",getCategoris)
router.post("/create",requireSignin,isAdmin,createCategory)




module.exports = router;