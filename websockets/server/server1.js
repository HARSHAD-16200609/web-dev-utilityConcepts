import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();


const server = http.createServer(app);


const io = new Server(server,{
    cors:{origin:"*"}
});

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("message", (data) => {
    console.log(data);
    // io.emit("message", data); // sends data to user as well as user connected to the websocket
      socket.broadcast.emit("message", data); // sends data to all user except the one who sent the data
          // socket.emit("message", data);   // sends data back to user that sent data 
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});


app.get("/", (req, res) => {
  res.send("Server running");
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
