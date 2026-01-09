// this file is for implemeting the websockets without sockets.io
import http from "http";
import { WebSocketServer } from "ws";

const clients = new Set();

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
    clients.add(ws);

  
  // Listen for messages from THIS client
  ws.on("message",(data)=>{
   
    
    // Echo the message back to the client
sendMessages(data,ws);

  });
  
  // Handle client disconnect
  ws.on("close", () => {
    console.log("User disconnected");
  });
    
})


function sendMessages(data,ws){
  clients.forEach((client)=>{
    if(client !== ws &&
      client.readyState === WebSocket.OPEN
    )
    client.send(data.toString());
  })
}

sendMessages();

server.listen(8080,()=>{
    console.log("sever started on port 8080");
    
})

