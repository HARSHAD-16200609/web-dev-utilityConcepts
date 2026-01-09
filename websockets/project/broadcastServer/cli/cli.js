#!/usr/bin/env node

/**
 * CLI ENTRY POINT
 * Command:
 *   broadcast-server start --port 8080
 *   broadcast-server connect --url ws://localhost:8080
 */

import { startServer } from "../server/server.js";
import { startClient } from "../app/app.js";


const args = process.argv.slice(2);
console.log(args);


if (args.length === 0) {
  showHelp();
  process.exit(0);
}


const { command, options } = parseArgs(args);


function showHelp(){
    console.log(`
        please enter one of the folloeing commands 
        1)  broadcast-server start --port port.no (to start the server)
        2) broadcast-server connect --url ws://localhost:port.no (connect ws to url )
        `);
    
}


switch (command) {
  case "start":
    startServer(options);
    break;

  case "connect":
    startClient(options);
    break;
  default:
    console.error(`❌ Unknown command: ${command}`);
    showHelp();
    process.exit(1);
}


