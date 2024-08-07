import axios from "axios";
export const createVisitor = (visitorId) =>
  axios.post("/api/visitors/createvisitor", { visitorId });
export const verifyVisitor = (visitorId, email) =>
  axios.put("/api/visitors/verifyvisitor", { visitorId, email });
export const verifyOtp = (otp, email, visitorId) =>
  axios.post("/api/visitors/verifyotp", { otp, email, visitorId });
export const createContact = (contactInfo) =>
  axios.post("/api/contactus/createcontact", {...contactInfo});
