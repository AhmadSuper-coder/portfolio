const userModel=require("../model/userModel");
const bcrypt=require("bcrypt");

// user signup form 
const signup=async (req,res)=>{
    const {name,email,password}=req.body;
    try{
        // check weather user exist or not 
        const isUserExist=await userModel.findOne({email});
        if (isUserExist){
            res.send("Already have Account kindly login");
        }else{
            const user=new userModel({name,email,password});
            console.log("beofre saving the module");
            await user.save();
            res.status(201).json({
                status:"yes",
                message:"Successfully Registered"
            })
        }

    }catch(e){
        res.send(e);
    }
  
}


const login=async (req,res)=>{
    try{
        console.log(req.body);
        const {email,password}=req.body;
        // first check that user exist or not
        const isUserExist=await userModel.findOne({email});

        if (isUserExist){
            const validPass=await bcrypt.compare(password,isUserExist.password);
            res.status(200).json({
                status:"yes",
            })
        }else{
            res.send("You have entered wrong credentials")
        }

    }catch(e){
        res.send(e);
    }
}



module.exports={signup,login}