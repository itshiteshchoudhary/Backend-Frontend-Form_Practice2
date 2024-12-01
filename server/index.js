const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const authRoutes = require("./Routes/AuthRoutes")
const cookieParser = require("cookie-parser")

const app = express()

app.use(cors({
    origin : ["http://localhost:5173"],
    method :["GET", "POST"],
    credentials : true
}))

mongoose.connect("mongodb+srv://hiteshchoudhary1996:hiteshchoudhary2024@cluster0.nuiyq.mongodb.net/")
.then(()=>{
    console.log("DB connected successfully")
})
.catch((err)=>{
    console.log("connection failed to mongodb " ,err.message);    
})

app.use(cookieParser())
app.use(express.json())
app.use("/",authRoutes)


const Port = 4000
app.listen(Port ,()=>{
    console.log(`server is connected to Ports ${Port}`);    
})