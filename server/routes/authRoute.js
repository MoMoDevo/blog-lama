const express=require("express")
const{register, logoutUser,loggInUser}=require("../controllers/authController")

const router=express.Router()


router.post("/",register)


router.post("/login",loggInUser)
router.post("/register",register)
 




module.exports = router;