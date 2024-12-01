const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const {Schema} = mongoose

const userSchema = new Schema({
    email :{
        type : String,
        require : [true, "Email is required !!"],
        unique : true
    },
    password :{
        type : String,
        require :[true , "Password is required !!"]
    }
})

userSchema.pre("save",async function(next){
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password , salt)
})

module.exports = mongoose.model("User",userSchema)