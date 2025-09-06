const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (process.env.MONGO_URI) {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("✅ MongoDB Connected");
    } else {
      console.log("⚠️  MongoDB URI not found, running without database");
    }
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    console.log("⚠️  Continuing without database...");
  }
};

module.exports = connectDB;
