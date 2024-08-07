import express from "express";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'
dotenv.config({})
import path from 'path'
import visitorRouter from "./routes/Visitor.routes.js"
import contactusRouter from "./routes/Contactus.routes.js"
import cors from 'cors'
import ConnectDB from "./utils/db.js";
const app=express()
const __dirname=path.resolve();
const corsOption={
    origin:['http://localhost:5173'],credentials:true
}
ConnectDB()
app.use(cors(corsOption))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use('/api/visitors',visitorRouter)
app.use('/api/contactus',contactusRouter)
app.use(express.static(path.join(__dirname,'/client/dist')))
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','dist','index.html'))
})
const server=app.listen(8000,()=>{
    console.log(`Server started at http://localhost:${server.address().port}`)
})

app.use((err,req,res,next)=>{
    const message=err.message || "Internal Server Error"
    const statusCode=err.statusCode || 500
    res.status(statusCode).send({success:false,statusCode,message})
})