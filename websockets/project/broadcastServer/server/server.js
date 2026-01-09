import http from "http";
import WebSocket, { WebSocketServer } from "ws";

export function startServer(port = 8080) {
  const server = http.createServer();
  const wss = new WebSocketServer({ server });
  const clients = new Set();

function sendMessages(data,ws){
 for (const client of clients) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(data.toString());
        }
      }
}

  wss.on("connection", (ws) => {
    clients.add(ws);
    console.log("🟢 Client connected");

    ws.on("message", (data) => {
     sendMessages(data,ws)
    });

    ws.on("close", () => {
      clients.delete(ws);
      console.log("🔴 Client disconnected");
    });
  });

  server.listen(port, () => {
    console.log(`🚀 Server running on ws://localhost:${port}`);
  });
}



