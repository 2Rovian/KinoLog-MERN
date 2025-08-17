import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
        console.log("Connected to mongoDB");
    } catch (err) {
        console.error(`Erro ao conectar ao mongoDB`, err.message);
        process.exit(1)
    }
}

export { connectDB };