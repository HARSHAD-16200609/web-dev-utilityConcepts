#!/usr/bin/env node

import { startServer } from "../server/server.js";
import { startClient } from "../app/app.js";

const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case "start":
    startServer();
    break;

  case "connect":
    startClient();
    break;

  default:
    console.log(`
Usage:
  broadcast-server start
  broadcast-server connect
`);
}
