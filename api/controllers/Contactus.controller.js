import contactusModel from "../models/contactus.model.js";
import { sendContactus } from "../utils/EmailService.js";
import ErrorHandler from "../utils/Error.handler.js";

class ContactusController{
    async createContact(req,res,next){
        try {
            const {visitorId,name,email,message}=req.body
            if(!visitorId || !name || !email || !message){
                return next(ErrorHandler(400,'Please provide all the fields'))
            }
            const {ContactSend,result}=await sendContactus(visitorId,name,email,message)
            var updatedContact
            if(ContactSend){
                updatedContact=await contactusModel.findOneAndUpdate({email},{...req.body},{new:true})
                if(!updatedContact){
                    const contactUs=new contactusModel(req.body)
                    await contactUs.save()
                }
                return res.status(200).send({message:'Contact us form submitted successfully'})
            }
        } catch (error) {
            next(error)
        }
    }
}

export default new ContactusController();