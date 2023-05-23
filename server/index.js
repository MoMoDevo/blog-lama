const express =require("express")
const app=express()
const cors=require("cors")
const dotenv=require("dotenv")
const authROutes=require("./routes/authRoute")
const mongoose=require("mongoose")
const categoryRoutes=require("./routes/categoryRoute")
const postRoutes=require("./routes/postRoute")
const userRoutes=require("./routes/userRoute")
const cookieParser = require("cookie-parser" )
dotenv.config()

const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGOOO)
        console.log("connected to db")
        
    } catch (error) {
        console.log("failed to connect to db")
    }
}

app.use(express.json())
app.use(cors())
app.use(cookieParser());

app.use("/api",authROutes)
app.use("/category",categoryRoutes)
app.use("/post",postRoutes)
app.use("/",userRoutes)










app.listen(process.env.PORT,()=>{
    console.log("server is runnig ")
    connect()
})