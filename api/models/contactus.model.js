import mongoose from "mongoose";
let contactusSchema=new mongoose.Schema({
    visitorId:{type:String,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true},
    message:{type:String,required:true}
},{timestamps:true})

const contactusModel=mongoose.models.contactus || mongoose.model('contactus',contactusSchema)
export default contactusModel