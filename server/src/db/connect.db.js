import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Database connected successfully: ${connect.connection.host}`);
    }catch(err){
        console.error(`Database connection failed: ${err.message}`);
        process.exit(1); // Exit the process with a failure code
    }
}