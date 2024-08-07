import mongoose from 'mongoose'
async function ConnectDB(){
    try {
        const conn=await mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{bufferCommands:false})
        console.log(`MongoDB Connected at ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error Occured in connecting Database ${error}`)
    }
}

export default ConnectDB;