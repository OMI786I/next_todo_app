import mongoose from "mongoose";
const connectMongoDB = async () => {
  console.log("process.env.MONGO_URI");
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
