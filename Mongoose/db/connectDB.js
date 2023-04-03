import mongoose from "mongoose";

const connectDB = (DATABASE_URL) =>{
    return mongoose.connect(DATABASE_URL)
    .then(()=>{
        console.log("Database connected")
    })
    .catch((err)=>{
        console.log(err);
    })
}

export default connectDB;