const mongoose=require("mongoose");

const blogSchema = new mongoose.Schema({
    author:{
        type:String,
        required:ture,
        default:"ahmad",
    },

    title:{
        type:String,
        required:true,
    },

    desc:{
        type:String,
        required:ture,
    },

    date:{
        type:Date,
        default:Date.now
    },

    comment: {
        type:String,
        required:true
    }

});

