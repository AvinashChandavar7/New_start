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
wss.on('connection', (ws) => {
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
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// const express = require('express');
// const http = require('http');
// const { WebSocketServer } = require('ws');

// // Mock data for TV Android devices
// const mockTVDevices = [
//   { id: 1, name: 'Living Room TV' },
//   { id: 2, name: 'Bedroom TV' },
//   { id: 3, name: 'Kitchen TV' },
//   { id: 4, name: 'Office TV' },
//   { id: 5, name: 'Guest Room TV' },
// ];

// // Create an Express application
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Serve static files from the 'public' directory
// app.use(express.static('public'));

// // Create an HTTP server
// const server = http.createServer(app);

// // Initialize WebSocket Server
// const wss = new WebSocketServer({ server });

// // Function to send mock TV devices to a client
// const sendTVDevices = (ws) => {
//   ws.send(JSON.stringify(mockTVDevices));
// };

// // WebSocket connection handler
// wss.on('connection', (ws) => {
//   console.log('Client connected');

//   ws.on('message', (message) => {
//     const { action, id } = JSON.parse(message);

//     if (action === 'search') {
//       sendTVDevices(ws);
//     } else if (action === 'connect') {
//       const device = mockTVDevices.find((device) => device.id === id);

//       if (device) {
//         ws.send(JSON.stringify({ status: 'connected', device }));
//       } else {
//         ws.send(JSON.stringify({ status: 'error', error: 'Device not found' }));
//       }
//     }
//   });

//   ws.on('close', () => {
//     console.log('Client disconnected');
//   });
// });

// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// const express = require('express');
// const http = require('http');
// const { WebSocketServer } = require('ws');

// // Mock data for TV Android devices
// const mockTVDevices = [
//   { id: 1, name: 'Living Room TV' },
//   { id: 2, name: 'Bedroom TV' },
//   { id: 3, name: 'Kitchen TV' },
//   { id: 4, name: 'Office TV' },
//   { id: 5, name: 'Guest Room TV' },
// ];

// // Create an Express application
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Serve static files from the 'public' directory
// app.use(express.static('public'));

// // Create an HTTP server
// const server = http.createServer(app);

// // Initialize WebSocket Server
// const wss = new WebSocketServer({ server });

// // Function to send mock TV devices to a client
// const sendTVDevices = (ws) => {
//   ws.send(JSON.stringify(mockTVDevices));
// };

// // WebSocket connection handler
// wss.on('connection', (ws) => {
//   console.log('Client connected');

//   ws.on('message', (message) => {
//     const { action, id } = JSON.parse(message);

//     if (action === 'search') {
//       sendTVDevices(ws);
//     } else if (action === 'connect') {
//       const device = mockTVDevices.find((device) => device.id === id);

//       if (device) {
//         ws.send(JSON.stringify({ status: 'connected', device }));
//       } else {
//         ws.send(JSON.stringify({ status: 'error', error: 'Device not found' }));
//       }
//     }
//   });

//   ws.on('close', () => {
//     console.log('Client disconnected');
//   });
// });

// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



// const express = require('express');
// const http = require('http');
// const { WebSocketServer, WebSocket } = require('ws');

// // Mock data for TV Android devices
// const mockTVDevices = [
//   { id: 1, name: 'Living Room TV' },
//   { id: 2, name: 'Bedroom TV' },
//   { id: 3, name: 'Kitchen TV' },
//   { id: 4, name: 'Office TV' },
//   { id: 5, name: 'Guest Room TV' },
// ];

// // Create an Express application
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Serve static files from the 'public' directory
// app.use(express.static('public'));

// // Create an HTTP server
// const server = http.createServer(app);

// // Initialize WebSocket Server
// const wss = new WebSocketServer({ server });

// // Function to send mock TV devices to all connected clients
// const sendTVDevices = (ws) => {
//   ws.send(JSON.stringify(mockTVDevices));
// };

// // WebSocket connection handler
// wss.on('connection', (ws) => {
//   console.log('Client connected');

//   // Handle connection request from client
//   ws.on('message', (message) => {
//     const { action, id } = JSON.parse(message);

//     if (action === 'search') {
//       sendTVDevices(ws);
//     } else if (action === 'connect') {
//       const device = mockTVDevices.find((device) => device.id === id);

//       if (device) {
//         ws.send(JSON.stringify({ status: 'connected', device }));
//       } else {
//         ws.send(JSON.stringify({ status: 'error', error: 'Device not found' }));
//       }
//     }
//   });

//   // Clear interval on client disconnect
//   ws.on('close', () => {
//     console.log('Client disconnected');
//   });
// });

// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


//----------------------------------------------------------------

// const express = require('express');
// const http = require('http');
// const { WebSocketServer, WebSocket } = require('ws');

// // Mock data for TV Android devices
// const mockTVDevices = [
//   { id: 1, name: 'Living Room TV' },
//   { id: 2, name: 'Bedroom TV' },
//   { id: 3, name: 'Kitchen TV' },
//   { id: 4, name: 'Office TV' },
//   { id: 5, name: 'Guest Room TV' },
// ];

// // Create an Express application
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Serve static files from the 'public' directory
// app.use(express.static('public'));

// // Create an HTTP server
// const server = http.createServer(app);

// // Initialize WebSocket Server
// const wss = new WebSocketServer({ server });

// // Function to send mock TV devices to all connected clients
// const sendTVDevices = (ws) => {
//   ws.send(JSON.stringify(mockTVDevices));
// };

// // WebSocket connection handler
// wss.on('connection', (ws) => {
//   console.log('Client connected');

//   // Send initial mock TV devices data
//   sendTVDevices(ws);

//   // Handle connection request from client
//   ws.on('message', (message) => {
//     const { id } = JSON.parse(message);
//     const device = mockTVDevices.find((device) => device.id === id);

//     if (device) {
//       ws.send(JSON.stringify({ status: 'connected', device }));
//     } else {
//       ws.send(JSON.stringify({ status: 'error', error: 'Device not found' }));
//     }
//   });

//   // Clear interval on client disconnect
//   ws.on('close', () => {
//     console.log('Client disconnected');
//   });
// });

// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


//----------------------------------------------------------------

// const express = require('express');
// const http = require('http');
// const { WebSocketServer, WebSocket } = require('ws'); // Import WebSocket

// // Mock data for TV Android devices
// const mockTVDevices = [
//   { id: 1, name: 'Living Room TV' },
//   { id: 2, name: 'Bedroom TV' },
//   { id: 3, name: 'Kitchen TV' },
//   { id: 4, name: 'Office TV' },
//   { id: 5, name: 'Guest Room TV' },
// ];

// // Create an Express application
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Serve static files from the 'public' directory
// app.use(express.static('public'));

// // Define a simple route
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // Create an HTTP server
// const server = http.createServer(app);

// // Initialize WebSocket Server
// const wss = new WebSocketServer({ server });

// // Broadcast function
// const broadcast = (clients, data) => {
//   clients.forEach((client) => {
//     if (client.readyState === WebSocket.OPEN) {
//       client.send(JSON.stringify(data));
//     }
//   });
// };

// // WebSocket connection handler
// wss.on('connection', (ws) => {
//   console.log('Client connected');

//   // Send initial mock TV devices data
//   ws.send(JSON.stringify(mockTVDevices));

//   // Handle connection request from client
//   ws.on('message', (message) => {
//     const { id } = JSON.parse(message);
//     const device = mockTVDevices.find((device) => device.id === id);

//     if (device) {
//       ws.send(JSON.stringify({ status: 'connected', device }));
//     } else {
//       ws.send(JSON.stringify({ status: 'error', error: 'Device not found' }));
//     }
//   });

//   // Clear interval on client disconnect
//   ws.on('close', () => {
//     console.log('Client disconnected');
//   });
// });

// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });








// const express = require('express');
// const http = require('http');
// const { WebSocketServer, WebSocket } = require('ws'); // Import WebSocket
// const wifi = require('node-wifi');

// // Initialize wifi module
// wifi.init({
//   iface: null // network interface, choose a random wifi interface if set to null
// });

// // Create an Express application
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Serve static files from the 'public' directory
// app.use(express.static('public'));

// // Define a simple route
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // Create an HTTP server
// const server = http.createServer(app);

// // Initialize WebSocket Server
// const wss = new WebSocketServer({ server });

// // Function to scan WiFi devices
// const scanWifi = async () => {
//   try {
//     const networks = await wifi.scan();
//     return networks;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

// // Broadcast function
// const broadcast = (clients, data) => {
//   clients.forEach((client) => {
//     if (client.readyState === WebSocket.OPEN) {
//       client.send(JSON.stringify(data));
//     }
//   });
// };

// // WebSocket connection handler
// wss.on('connection', (ws) => {
//   console.log('Client connected');

//   // Send initial WiFi scan data
//   scanWifi().then((networks) => {
//     ws.send(JSON.stringify(networks));
//   });

//   // Scan WiFi devices every 10 seconds and broadcast to all clients
//   const interval = setInterval(async () => {
//     const networks = await scanWifi();
//     broadcast(wss.clients, networks);
//   }, 10000);

//   // Clear interval on client disconnect
//   ws.on('close', () => {
//     clearInterval(interval);
//     console.log('Client disconnected');
//   });

//   // Handle connection request from client
//   ws.on('message', async (message) => {
//     const { ssid, password } = JSON.parse(message);
//     try {
//       await wifi.connect({ ssid, password });
//       ws.send(JSON.stringify({ status: 'connected', ssid }));
//     } catch (error) {
//       ws.send(JSON.stringify({ status: 'error', error }));
//     }
//   });
// });

// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
