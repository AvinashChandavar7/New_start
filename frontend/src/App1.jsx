import { useState, useEffect } from 'react';

const App = () => {
  const [devices, setDevices] = useState([]);
  const [connections, setConnections] = useState({});

  useEffect(() => {
    // Establish WebSocket connection
    const ws = new WebSocket('ws://localhost:3000');

    ws.onopen = () => {
      console.log('WebSocket connection established');

      // Request list of devices
      ws.send(JSON.stringify({ action: 'search' }));
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (Array.isArray(message)) {
        // Update devices list
        setDevices(message);
      } else if (message.status === 'connected') {
        alert(`Connected to ${message.device.name}`);
      }
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    // Clean up WebSocket connection on component unmount
    return () => {
      ws.close();
    };
  }, []);

  const handleConnect = (device) => {
    const ws = new WebSocket('ws://localhost:3000');

    ws.onopen = () => {
      console.log(`WebSocket connection established for device ${device.name}`);

      // Send connect request
      ws.send(JSON.stringify({ action: 'connect', id: device.id }));
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.status === 'connected') {
        alert(`Connected to ${message.device.name}`);
        setConnections((prev) => ({
          ...prev,
          [device.id]: ws,
        }));
      }
    };

    ws.onclose = () => {
      console.log(`WebSocket connection closed for device ${device.name}`);
    };
  };

  return (
    <div>
      <h1>Available TV Devices</h1>
      <ul>
        {devices.map((device) => (
          <li key={device.id}>
            {device.name}
            <button onClick={() => handleConnect(device)}>Connect</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;



// import { useEffect, useState } from 'react';

// const App = () => {
//   const [devices, setDevices] = useState([]);
//   const [selectedDevices, setSelectedDevices] = useState([]);
//   const [status, setStatus] = useState('');

//   useEffect(() => {
//     const socket = new WebSocket('ws://localhost:3000');

//     socket.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       if (Array.isArray(data)) {
//         setDevices(data);
//       } else if (data.status) {
//         setStatus(data.status === 'connected' ? `Connected to ${data.device.name}` : `Error: ${data.error}`);
//       }
//     };

//     return () => {
//       socket.close();
//     };
//   }, []);

//   const handleSearch = () => {
//     const socket = new WebSocket('ws://localhost:3000');
//     socket.onopen = () => {
//       socket.send(JSON.stringify({ action: 'search' }));
//     };
//   };

//   const handleSelectDevice = (id) => {
//     setSelectedDevices((prevSelected) =>
//       prevSelected.includes(id) ? prevSelected.filter((deviceId) => deviceId !== id) : [...prevSelected, id]
//     );
//   };

//   const handleConnect = () => {
//     selectedDevices.forEach((id) => {
//       const socket = new WebSocket('ws://localhost:3000');
//       socket.onopen = () => {
//         socket.send(JSON.stringify({ action: 'connect', id }));
//       };
//     });
//   };

//   return (
//     <div>
//       <h1>Nearby TV Android Devices</h1>
//       <button onClick={handleSearch}>Search Devices</button>
//       <ul>
//         {devices.map((device) => (
//           <li
//             key={device.id}
//             onClick={() => handleSelectDevice(device.id)}
//             style={{ cursor: 'pointer', backgroundColor: selectedDevices.includes(device.id) ? 'lightgray' : 'white' }}
//           >
//             {device.name}
//           </li>
//         ))}
//       </ul>
//       {selectedDevices.length > 0 && (
//         <div>
//           <h2>Connect to Selected Devices</h2>
//           <button onClick={handleConnect}>Connect</button>
//         </div>
//       )}
//       {status && <p>{status}</p>}
//     </div>
//   );
// };

// export default App;



// import { useEffect, useState } from 'react';

// const App = () => {
//   const [devices, setDevices] = useState([]);
//   const [selectedDevices, setSelectedDevices] = useState([]);
//   const [status, setStatus] = useState('');

//   useEffect(() => {
//     const socket = new WebSocket('ws://localhost:3000');

//     socket.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       if (Array.isArray(data)) {
//         setDevices(data);
//       } else if (data.status) {
//         setStatus(data.status === 'connected' ? `Connected to ${data.device.name}` : `Error: ${data.error}`);
//       }
//     };

//     return () => {
//       socket.close();
//     };
//   }, []);

//   const handleSearch = () => {
//     const socket = new WebSocket('ws://localhost:3000');
//     socket.onopen = () => {
//       socket.send(JSON.stringify({ action: 'search' }));
//     };
//   };

//   const handleSelectDevice = (id) => {
//     setSelectedDevices((prevSelected) => {
//       if (prevSelected.includes(id)) {
//         return prevSelected.filter((deviceId) => deviceId !== id);
//       } else {
//         return [...prevSelected, id];
//       }
//     });
//   };

//   const handleConnect = () => {
//     selectedDevices.forEach((id) => {
//       const socket = new WebSocket('ws://localhost:3000');
//       socket.onopen = () => {
//         socket.send(JSON.stringify({ action: 'connect', id }));
//       };
//     });
//   };

//   return (
//     <div>
//       <h1>Nearby TV Android Devices</h1>
//       <button onClick={handleSearch}>Search Devices</button>
//       <ul>
//         {devices && devices.map((device) => (
//           <li
//             key={device.ssid}
//             onClick={() => handleSelectDevice(device.id)}
//             style={{ cursor: 'pointer', backgroundColor: selectedDevices.includes(device.id) ? 'lightgray' : 'white' }}
//           >
//             {device.ssid}
//           </li>
//         ))}
//       </ul>
//       {selectedDevices.length > 0 && (
//         <div>
//           <h2>Connect to Selected Devices</h2>
//           <button onClick={handleConnect}>Connect</button>
//         </div>
//       )}
//       {status && <p>{status}</p>}
//     </div>
//   );
// };

// export default App;


// import { useEffect, useState } from 'react';

// const App = () => {
//   const [devices, setDevices] = useState([]);
//   const [selectedDevice, setSelectedDevice] = useState(null);
//   const [status, setStatus] = useState('');

//   useEffect(() => {
//     const socket = new WebSocket('ws://localhost:3000');

//     socket.onmessage = (event) => {
//       const data = JSON.parse(event.data);

//       if (Array.isArray(data)) {
//         setDevices(data); // Update devices state with the received data
//       } else if (data.status) {
//         setStatus(data.status === 'connected' ? `Connected to ${data.device.name}` : `Error: ${data.error}`);
//       }
//     };
//     console.log(devices);

//     return () => {
//       socket.close();
//     };
//   }, []);

//   const handleConnect = (id) => {
//     const socket = new WebSocket('ws://localhost:3000');
//     socket.onopen = () => {
//       socket.send(JSON.stringify({ id }));
//     };
//   };

//   return (
//     <div>
//       <h1>Nearby TV Android Devices</h1>
//       <ul>
//         {devices.map((device) => (
//           <li
//             key={device.ssid}
//             onClick={() => setSelectedDevice(device)}
//           >
//             {device.name}
//             {device.ssid}
//           </li>
//         ))}
//       </ul>
//       {selectedDevice && (
//         <div>
//           <h2>Connect to {selectedDevice.name}</h2>
//           <button onClick={() => handleConnect(selectedDevice.id)}>
//             Connect
//           </button>
//         </div>
//       )}
//       {status && <p>{status}</p>}
//     </div>
//   );
// };

// export default App;



// import { useEffect, useState } from 'react';

// const App = () => {
//   const [networks, setNetworks] = useState([]);
//   const [selectedNetwork, setSelectedNetwork] = useState('');
//   const [password, setPassword] = useState('');
//   const [status, setStatus] = useState('');

//   useEffect(() => {
//     const socket = new WebSocket('ws://localhost:3000');

//     socket.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       if (data.status) {
//         setStatus(data.status === 'connected' ? `Connected to ${data.ssid}` : `Error: ${data.error}`);
//       } else {
//         setNetworks(data);
//       }
//     };

//     return () => {
//       socket.close();
//     };
//   }, []);

//   const handleConnect = () => {
//     const socket = new WebSocket('ws://localhost:3000');
//     socket.onopen = () => {
//       socket.send(JSON.stringify({ ssid: selectedNetwork, password }));
//     };
//   };

//   const styles = {
//     container: {
//       fontFamily: 'Arial, sans-serif',
//       padding: '20px',
//       textAlign: 'center',
//     },
//     heading: {
//       color: '#333',
//     },
//     list: {
//       listStyleType: 'none',
//       padding: 0,
//     },
//     listItem: {
//       padding: '10px',
//       margin: '10px 0',
//       border: '1px solid #ddd',
//       borderRadius: '5px',
//       cursor: 'pointer',
//     },
//     selectedItem: {
//       backgroundColor: '#f0f0f0',
//     },
//     input: {
//       padding: '10px',
//       margin: '10px 0',
//       borderRadius: '5px',
//       border: '1px solid #ddd',
//       width: '200px',
//     },
//     button: {
//       padding: '10px 20px',
//       backgroundColor: '#007bff',
//       color: '#fff',
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer',
//     },
//     status: {
//       marginTop: '20px',
//       color: '#d9534f',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>Nearby WiFi Networks</h1>
//       <ul style={styles.list}>
//         {networks.slice(0, 5).map((network, index) => (
//           <li
//             key={index}
//             style={{
//               ...styles.listItem,
//               ...(network.ssid === selectedNetwork && styles.selectedItem),
//             }}
//             onClick={() => setSelectedNetwork(network.ssid)}
//           >
//             {network.ssid}
//           </li>
//         ))}
//       </ul>
//       {selectedNetwork && (
//         <div>
//           <h2 style={styles.heading}>Connect to {selectedNetwork}</h2>
//           <input
//             type="password"
//             placeholder="Password"
//             style={styles.input}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <br />
//           <button style={styles.button} onClick={handleConnect}>
//             Connect
//           </button>
//         </div>
//       )}
//       {status && <p style={styles.status}>{status}</p>}
//     </div>
//   );
// };

// export default App;
