// this file is for implemeting the websockets without sockets.io
import http from "http";
import { WebSocketServer } from "ws";



const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World");
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

const wss = new WebSocketServer({server})
wss.on("connection",(ws)=>{ // 'ws' parameter represents individual client
  console.log("user connected");
  
  // Listen for messages from THIS client
  ws.on("message",(data)=>{
    console.log("Received:", data.toString());
    // Echo the message back to the client
    ws.send(`Server received: ${data.toString()}`);
  });
  
  // Handle client disconnect
  ws.on("close", () => {
    console.log("User disconnected");
  });
    
})





server.listen(8080,()=>{
    console.log("sever started on port 8080");
    
})

