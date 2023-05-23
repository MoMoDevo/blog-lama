const express=require("express")
const{register, login}=require("../controllers/authController");
const { getAllUsers,getCountOfUsers } = require("../controllers/userControllers");
const {requireSignin,isAdmin}=require("../middelware/auth")
  
const router=express.Router()

 router.get("/users",requireSignin,isAdmin,getAllUsers)
 router.get("/users/count",requireSignin,isAdmin,getCountOfUsers)




module.exports = router;