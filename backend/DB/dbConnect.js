import mongoose from "mongoose";
const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT)
        console.log("MongoDB connected")
    } catch (error) {
        console.log(console.error())
    }
}
export default dbConnect