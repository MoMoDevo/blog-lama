const cloudinary = require('cloudinary').v2;


// Configuration 
cloudinary.config({
  cloud_name: "dddp1t7nu",
  api_key: "981374142168429",
  api_secret: "fN0uqhQLIQKI0ozM6pXxZ1XmRCg"
});

module.exports=cloudinary;