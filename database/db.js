import mongoose from "mongoose";

const Connection = async () => {
  try {
    mongoose.connect(process.env.URL_MONGOOSE, { useUnifiedTopology: true });
    console.log("Connect SuccessFully");
  } catch (error) {
    console.log("Connect error");
  }
};

export default Connection;