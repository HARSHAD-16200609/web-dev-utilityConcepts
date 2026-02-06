#!/usr/bin/env node

import { startServer } from "../server/server.js";
import { startClient } from "../app/app.js";

const args = process.argv.slice(2);


const command = args[0];



switch (command) {
  case "start":
    // For starting server: defaults to 8080, overrides with process.env.PORT (deployment), or uses arg[1] if it's a number
    const port = (args[1] && !isNaN(args[1])) ? args[1] : (process.env.PORT || 8080);
    startServer(port);
    break;

  case "connect":
    // For connecting: defaults to localhost:8080 or uses arg[1]
    let url = args[1];
    if (!url) {
      url = "ws://localhost:8080";
    } else if (!url.startsWith("ws://") && !url.startsWith("wss://")) {
        // If user provided just a port number, assume localhost
        if (!isNaN(url)) {
            url = `ws://localhost:${url}`;
        }
    }
    startClient(url);
    break;

  default:
    console.log(`
Usage:
  broadcast-server start [port] (to start the server)
  broadcast-server connect [url] (to connect to server)
`);
}
