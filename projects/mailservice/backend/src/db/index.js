import mongoose from "mongoose";

export default connectDB = async () => {
    try {
        const connectionDatabase = await mongoose.connect(
            `${process.env.MONGO_URI}/${process.env.DB_NAME}`,
        );
        console.log(`MongoDB Connected: ${connectionDatabase.connection.host}`);
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR", error);
        process.exit(1);
    }
};
