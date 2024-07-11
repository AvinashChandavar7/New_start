// const express = require('express');
// const http = require('http');
// const WebSocket = require('ws');
// const crypto = require('crypto');

// const app = express();
// const server = http.createServer(app);
// const wss = new WebSocket.Server({ server });

// wss.on('connection', (ws) => {
//   console.log('Client connected');

//   ws.on('message', (message) => {
//     console.log('Received message:', message.toString());
//     if (message.toString() === 'generateRandomNumber') {
//       const randomNumber = crypto.randomInt(1000, 10000).toString(); // Convert to string explicitly
//       console.log('Generated random number:', randomNumber);
//       ws.send(randomNumber); // Send the random number as a string
//     }
//   });

//   ws.on('close', () => {
//     console.log('Client disconnected');
//   });
// });

// const PORT = process.env.PORT || 4000;
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const crypto = require('crypto');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Function to generate a random number between min (inclusive) and max (exclusive)
const generateRandomNumber = (min, max) => {
  return crypto.randomInt(min, max).toString(); // Convert to string explicitly
};

// WebSocket server logic
wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log('Received message:', message.toString());
    if (message.toString() === 'generateRandomNumber') {
      const randomNumber = generateRandomNumber(10000, 99999);
      console.log('Generated random number:', randomNumber);
      ws.send(randomNumber); // Send the random number as a string
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
