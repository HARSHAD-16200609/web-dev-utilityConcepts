import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import urlRouter from "./routes/shortenUrl.route.js";

dotenv.config();

const app = express();
app.use(express.json());

let isConnected = false;

async function connectdb(uri) {
  if (isConnected) return;

  await mongoose.connect(uri);
  isConnected = true;
  console.log("DB connected");
}

await connectdb(process.env.MONGO_URI);

process.once("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("MongoDB disconnected");
  process.exit(0);
});

app.use("/api/v1", urlRouter);

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});