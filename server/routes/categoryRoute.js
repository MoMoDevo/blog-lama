const express=require("express")
const router=express.Router()
const { createCategory,getCategoris } = require("../controllers/categoryController");


//router.post("/",createCategory)
router.get("/",getCategoris)




module.exports = router;