import http from "http";
import WebSocket, { WebSocketServer } from "ws";
import { animeProtagonists } from "../app/usernames.js";

export function startServer(port = 8080) {
  const server = http.createServer();
  const wss = new WebSocketServer({ server });
  const clients = new Set();

  const colors = [
    "\x1b[31m", // Red
    "\x1b[32m", // Green
    "\x1b[33m", // Yellow
    "\x1b[34m", // Blue
    "\x1b[35m", // Magenta
    "\x1b[36m", // Cyan
  ];
  const resetColor = "\x1b[0m";

  function sendMessages(data, ws) {
    for (const client of clients) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(`${ws.username} ${ws.color}●${resetColor} : ${data.toString()}`);
      }
    }
  }

  wss.on("connection", (ws) => {
    ws.username = animeProtagonists[Math.floor(Math.random() * animeProtagonists.length)];
    ws.color = colors[Math.floor(Math.random() * colors.length)];
    
    clients.add(ws);
    console.log(`${ws.username} ${ws.color}●${resetColor} connected`);
    
    // Inform the user of their identity
    ws.send(`Welcome! You are ${ws.username} ${ws.color}●${resetColor}`);

    ws.on("message", (data) => {
      sendMessages(data, ws);
    });

    ws.on("close", () => {
      clients.delete(ws);
      console.log(`${ws.username} \x1b[31m●${resetColor} Disconnected`);
    });
  });

  server.listen(port, () => {
    // Enhanced logging for production debugging
    console.log(`🟢 WebSocket server running on port ${port}`);
    console.log(`📡 Ready to accept connections`);
    
    // Show different connection instructions based on environment
    if (process.env.NODE_ENV === 'production') {
      console.log(`🌐 External clients should connect to: wss://your-app.onrender.com`);
    } else {
      console.log(`🔧 Local clients can connect to: ws://localhost:${port}`);
    }
  });

  // Graceful shutdown handling for production deployments
  process.on('SIGTERM', () => {
    console.log('⚠️  SIGTERM received, closing server gracefully...');
    server.close(() => {
      console.log('✅ Server closed');
      process.exit(0);
    });
  });
}
