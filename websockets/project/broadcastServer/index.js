#!/usr/bin/env node

/**
 * Production entry point for WebSocket server
 * Used by Render and other cloud platforms
 * 
 * This file immediately starts the WebSocket server without
 * any CLI interaction or argument parsing.
 */

import { startServer } from './server/server.js';

// Render provides PORT via environment variable
// Fallback to 8080 for local testing
const PORT = process.env.PORT || 8080;

console.log('🚀 Starting WebSocket server in production mode...');
console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);

startServer(PORT);
