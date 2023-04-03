import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) =>{
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("Database connected");
    } catch (err) {
        console.log(err);
    }
}
// const connectDB = (DATABASE_URL) =>{
//     return mongoose.connect(DATABASE_URL)
//     .then(()=>{
//         console.log("Database connected")
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// }

export default connectDB;