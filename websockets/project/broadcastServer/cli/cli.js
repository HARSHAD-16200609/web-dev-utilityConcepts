#!/usr/bin/env node

import { startServer } from "../server/server.js";
import { startClient } from "../app/app.js";

const args = process.argv.slice(2);


const command = args[0];
const port = args[1]



switch (command) {
  case "start":
    startServer(port);
    break;

  case "connect":
    startClient(`ws://localhost:${port}`);
    break;

  default:
    console.log(`
Usage:
  broadcast-server start (to start the server)
  broadcast-server connect (to connect to server)
`);
}
