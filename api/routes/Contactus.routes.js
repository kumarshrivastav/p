import express from "express";
import ContactusController from "../controllers/Contactus.controller.js";
const router=express.Router()
router.post('/createcontact',ContactusController.createContact)
export default router;