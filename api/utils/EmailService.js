import nodemailer from "nodemailer";
import dotenv from 'dotenv'
dotenv.config({})
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_PASSWORD
  },
});
export const sendOtp=async(email, otp)=> {
  let mailOptions = {
    from: process.env.ADMIN_EMAIL,
    to: email,
    subject: "Your Verification Code for ANKIT'S",
    html: `
    <div style="font-family:serif">
        <p>To proceed with your verification, please use the following One - Time Password (OTP):</p>
        <h2 style="font-weight:600">OTP: ${otp}</h2>
        <p style="color:red;font-weight:600">This OTP is valid for 2 minutes.</p>
        <p >Thank you for visit my portfolio.</p>
        </div>
        `
  };
  try {
    let info = await transporter.sendMail(mailOptions);
    return { OtpSuccess: true, result: info };
  } catch (error) {
    console.log(`Error Occured while sending OTP:${error}`);
    return { OtpSuccess: false, result: error };
  }
}

export const sendContactus=async(visitorId,name,email,message)=>{
  let mailOptions={
    from: email,
    to: process.env.ADMIN_EMAIL,
    subject: `New Contact from ${name}`,
    html: `
    <div style="font-family:serif">
        <p>New Contact has been submitted by ${name} with email ${email}.</p>
        <p>Message: ${message}</p>
        <p>VisitorId: ${visitorId}</p>
        <p>Thank you for visit my portfolio.</p>
        </div>
        `
  }
  try {
    const info=await transporter.sendMail(mailOptions)
    return {ContactSend:true,result:info}
  } catch (error) {
    console.log(`Error while sending contact form ${error}`)
    return {ContactSend:true,result:error}
  }
}
