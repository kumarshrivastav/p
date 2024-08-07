import visitorModel from "../models/Visitor.models.js";
import {sendOtp} from "../utils/EmailService.js";
import ErrorHandler from "../utils/Error.handler.js";
import crypto from "crypto";

class VisitorController {
  async createVisitor(req, res, next) {
    var visitor;
    try {
      const { visitorId } = req.body;
      visitor = await visitorModel.findOne({ visitorId });
      if (!visitor) {
        visitor = new visitorModel({ visitorId });
        await visitor.save()
      }
      
      if (!visitor.isVerified) {
        return res
          .status(201)
          .send({ visitor, verified: false, success: false });
      } else {
        return res.status(200).send({ visitor, verified: true, success: true });
      }
    } catch (error) {
      next(error);
    }
  }
  async verifyVisitor(req, res, next) {
    try {
      const { email, visitorId } = req.body;
      const otp = crypto.randomInt(1000, 9999);
      const visitor = await visitorModel.findOne({visitorId:visitorId});
      if (!visitor) {
        return next(ErrorHandler(401, "Visitor Not Found In Record"));
      }
      await visitorModel.updateOne(
        { visitorId },
        { email }
      );
      let ttl = 1000 * 60 * 2;
      let expires = Date.now() + ttl;
      const visitorOtp = `${otp}.${expires}`;
      await visitorModel.updateOne({visitorId,email},{otp:visitorOtp},{new:true})
      const {OtpSuccess,result}=await sendOtp(email,otp)
      if (OtpSuccess) {
        return res.status(200).send({message:'OTP has been Sent Successfully',result})
      }
      else{
        return res.status(401).send({message:'Error occured while sending otp',error:result})
      }
    } catch (error) {
      next(error);
    }
  }
  async verifyOtp(req, res, next) {
    try {
      const { otp} = req.body;
      const visitor = await visitorModel.findOne({ visitorId:req.body.visitorId });
      if (!visitor) {
        return next(ErrorHandler(401, "Visitor Not Found In Record"));
      }
      const [otpFromDb, expiryTime] = visitor.otp.split(".");
      if (Date.now() >= expiryTime) {
        return next(ErrorHandler(401, "OTP has been Expired"));
      }
      if (otp !== otpFromDb) {
        return next(ErrorHandler(401, "please enter the correct otp"));
      }
      if (otp === otpFromDb) {
        visitor.isVerified = true;
        visitor.otp = `${otpFromDb}.${expiryTime}`;
        await visitor.save();
        return res.status(200).send({ visitor, verified: true, success: true });
      }
    } catch (error) {
      return next(error);
    }
  }
}

export default new VisitorController();
