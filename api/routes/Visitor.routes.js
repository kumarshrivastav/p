import express from 'express'
import VisitorControllers from '../controllers/Visitor.controllers.js'
const router=express.Router()

router.post('/createvisitor',VisitorControllers.createVisitor)
router.put('/verifyvisitor',VisitorControllers.verifyVisitor)
router.post('/verifyotp',VisitorControllers.verifyOtp)
export default router