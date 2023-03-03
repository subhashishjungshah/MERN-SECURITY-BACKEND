const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

async function connectDB() {
  const mongod = await MongoMemoryServer.create();
  const getUri = mongod.getUri();
  mongoose.set("strictQuery", true);
  const db = await mongoose.connect(getUri);
  console.log("Database Connected");
  return db;
}
module.exports = connectDB;
