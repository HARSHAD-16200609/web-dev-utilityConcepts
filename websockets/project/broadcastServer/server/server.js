import http from "http";
import WebSocket, { WebSocketServer } from "ws";
import { animeProtagonists } from "../app/usernames.js";

export function startServer(port = 8080) {
  const server = http.createServer();
  const wss = new WebSocketServer({ server });
  const clients = new Set();

  function sendMessages(data, ws) {
    for (const client of clients) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(`🟢 ${ws.username} : ${data.toString()}`);
      }
    }
  }

  wss.on("connection", (ws) => {
    ws.username =animeProtagonists[Math.floor(Math.random() * animeProtagonists.length)];
    clients.add(ws);
    console.log(`🟢 ${ws.username} connected`);

    ws.on("message", (data) => {
      sendMessages(data, ws);
    });

    ws.on("close", () => {
      clients.delete(ws);
      console.log(`🔴 ${ws.username} Disconnected`);
    });
  });

  server.listen(port, () => {
    console.log(`🟢 Server running on ws://localhost:${port}`);
  });
}
