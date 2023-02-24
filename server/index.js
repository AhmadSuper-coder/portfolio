const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser")
const cors=require("cors");
const dotenv=require("dotenv").config();
const userRouter=require("./Routes/userRoute");
const app=express();


// Middelware 
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());
app.use(bodyParser.json());
app.use("/api/user",userRouter);



const PORT=process.env.PORT || 8000;

// connect to mongodb 
mongoose.set("strictQuery",false);
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`backend running on ${PORT}`);
    })
})
.catch((err)=>{
    console.log(err);
})



