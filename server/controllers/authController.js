const User=require("../models/userModel")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

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

  res.json(user)
   

        
    } catch (error) {
        
    }
}


exports.loggInUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.starus(401).json("wrong email or password")
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return res.send("wrong credentials")
      const token = jwt.sign({ _id: user._id },"123456", {
        expiresIn: "20m",
      });
      // 7. send response
      res.json({
        user: {
          username: user.username,
          email: user.email,
          role: user.role,
        },
        token,
      });

    
  } catch (err) {
 console.log("failed to login")
  }
};







exports.logoutUser = async (req, res) => {
    res
      .clearCookie("accessToken", {
        sameSite: "none",
        secure: true,
      })
      .status(200)
      .send("User has been logged out.");
  };