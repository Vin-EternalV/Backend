import mongoose from "mongoose";
import dns from "node:dns";

const connectDB = async () => {
  try {
    if (process.env.MONGODB_URI.startsWith("mongodb+srv://")) {
      dns.setServers([process.env.MONGODB_DNS_SERVER || "1.1.1.1"]);
    }

    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
