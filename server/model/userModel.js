const mongoose=require("mongoose");
const bcrypt=require("bcrypt");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
    },

    password:{
        type:String,
        min:5,
        max:15,
        required:true,
    },
    
    isAuth:{
        type:Boolean,
        default:false
    },

    isAdmin:{
        type:Boolean,
        default:false
    }

})


// before saving the doucment just bcrypt  

userSchema.pre("save",async function(next){

    // Only hash the password when modified or new
    if (!this.isModified("password")){
        return next();
    }

    // Generate a salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password=hashPassword;
    next();

})


// creating a model 

const userModel=mongoose.model("registeruser",userSchema);

module.exports=userModel;