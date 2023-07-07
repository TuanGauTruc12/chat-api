import mongoose from "mongoose";

export const URL_MONGOOSE = 'mongodb+srv://phamtuan12022001:phamtuan12022001@whatsapp-clone.dhlhahs.mongodb.net/?retryWrites=true&w=majority';

const Connection = async () => {
  try {
    mongoose.connect(URL_MONGOOSE, { useUnifiedTopology: true });
    console.log("Connect SuccessFully");
  } catch (error) {
    console.log("Connect error");
  }
};

export default Connection;