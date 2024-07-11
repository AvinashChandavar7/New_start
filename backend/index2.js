const express = require('express');
const http = require('http');
const { WebSocketServer } = require('ws');

// Mock data for TV Android devices
const mockTVDevices = [
  { id: 1, name: 'Living Room TV' },
  { id: 2, name: 'Bedroom TV' },
  { id: 3, name: 'Kitchen TV' },
  { id: 4, name: 'Office TV' },
  { id: 5, name: 'Guest Room TV' },
];

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Create an HTTP server
const server = http.createServer(app);

// Initialize WebSocket Server
const wss = new WebSocketServer({ server });

// Function to send mock TV devices to a client
const sendTVDevices = (ws) => {
  ws.send(JSON.stringify(mockTVDevices));
};

// WebSocket connection handler
const handleConnection = (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    const { action, id } = JSON.parse(message);

    if (action === 'search') {
      sendTVDevices(ws);
    } else if (action === 'connect') {
      const device = mockTVDevices.find((device) => device.id === id);

      if (device) {
        ws.send(JSON.stringify({ status: 'connected', device }));
      } else {
        ws.send(JSON.stringify({ status: 'error', error: 'Device not found' }));
      }
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });

  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
};

wss.on('connection', handleConnection);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
