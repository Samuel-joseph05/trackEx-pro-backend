import mongoose from "mongoose";

const expenseSchema= new mongoose.Schema({
    title:{
type:String,
required:true,
trim:true
    },
    amount:{
        type:Number,
        required:true,
        trim:true

    },
    category:{
        type:String,
        default:"Others"

    },
    date:{
type:Date,
default:Date.now
    },
    
})
export default mongoose.model("Expense",expenseSchema)