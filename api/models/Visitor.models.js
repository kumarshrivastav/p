import mongoose from "mongoose";

let visitorSchema=new mongoose.Schema({
    visitorId:{type:String,unique:true,required:true},
    email:{type:String,default:null},
    isVerified:{type:Boolean,default:false},
    otp:{type:String,default:null}
},{timestamps:true})

const visitorModel=mongoose.models.visitors || mongoose.model('visitors',visitorSchema)
export default visitorModel