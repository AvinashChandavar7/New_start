const express = require('express');
const { WebSocketServer } = require('ws');

const app = express();
const port = 3001;

// Serve static files from the React app
app.use(express.static('public'));

// Mock data for nearby devices
const devices = [
  { id: 1, name: 'TV Device 1' },
  { id: 2, name: 'TV Device 2' },
  { id: 3, name: 'TV Device 3' }
];

// Endpoint to get the list of devices
app.get('/api/devices', (req, res) => {
  res.json(devices);
});

// Initialize WebSocket server
const wss = new WebSocketServer({ noServer: true });

// Store active WebSocket connections
const connections = {};

wss.on('connection', (ws, request) => {
  const deviceId = request.url.split('/').pop();
  connections[deviceId] = ws;

  ws.on('message', (message) => {
    console.log(`Received message from device ${deviceId}: ${message}`);
  });

  ws.on('close', () => {
    delete connections[deviceId];
  });
});

// Upgrade HTTP server to handle WebSocket
app.server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});
