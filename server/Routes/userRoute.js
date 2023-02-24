const express=require('express');
const userRouter=express.Router();
const {signup,login}=require("../Controller/userConroller");


userRouter.post("/signup",signup);
userRouter.post("/login",login);





module.exports=userRouter;
