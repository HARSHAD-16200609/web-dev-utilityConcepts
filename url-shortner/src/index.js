import express, { json } from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import urlRouter from "./routes/shortenUrl.route.js"

dotenv.config()


const app = express();

app.use(express.json())


async function connectdb(connection_url) {
  try {
     if (mongoose.connection.readyState === 1) {
      console.log("Database already connected");
      return;
    }
    const connection_instance = await mongoose.connect(connection_url);
    
    console.log(
      `DB connected sucessfully DB_HOST:${connection_instance.connection.host}`
    );
  } catch (err) {
    console.log(`ERROR CONNECTING TO THE DATABASE : ${err}`);

    process.exit(1);
  }
}

connectdb(process.env.MONGO_URI)


app.use('/api/v1',urlRouter)


app.listen(5000,()=>{
    console.log("server listening on port 5000");
    
})