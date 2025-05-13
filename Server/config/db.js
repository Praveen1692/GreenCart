import mongoose from "mongoose";

const connectToDB = async () => {
   // console.log(process.env.MONGODB_URL);
    
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database connedted");
    });
    await mongoose.connect(`${process.env.MONGODB_URL}`);
  } catch (error) {
    console.log("error in connecting to mongodb");
    console.error(error.message);
  }
};

export default connectToDB;
