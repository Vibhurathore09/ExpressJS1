import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) =>{
    try {
        const DB_OPTIONS = {
            user : 'vibhurathore',
            pass:'123456',
            dbName:'schoolDb',
            authSource:'schoolDb'
        }
        // await mongoose.connect(DATABASE_URL);
        await mongoose.connect(DATABASE_URL , DB_OPTIONS);
        console.log("Database connected");
    } catch (err) {
        console.log(err);
    }
}

export default connectDB;