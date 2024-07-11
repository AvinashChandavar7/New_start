import { useState, useEffect, useCallback } from 'react';

const useWebSocket = (url) => {
  const [ws, setWs] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onopen = () => {
      console.log('WebSocket connection established');
      setIsConnected(true);
    };

    socket.onmessage = (event) => {
      setMessage(JSON.parse(event.data));
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
      setIsConnected(false);
    };

    setWs(socket);

    return () => {
      socket.close();
    };
  }, [url]);

  const sendMessage = useCallback(
    (msg) => {
      if (isConnected && ws) {
        ws.send(JSON.stringify(msg));
      }
    },
    [isConnected, ws]
  );

  return { ws, isConnected, message, sendMessage };
};

const App = () => {
  const { isConnected, message, sendMessage } = useWebSocket('ws://localhost:3000');
  const [devices, setDevices] = useState([]);
  const [connections, setConnections] = useState({});

  useEffect(() => {
    if (isConnected) {
      sendMessage({ action: 'search' });
    }
  }, [isConnected, sendMessage]);

  useEffect(() => {
    if (Array.isArray(message)) {
      setDevices(message);
    } else if (message?.status === 'connected') {
      alert(`Connected to ${message.device.name}`);
      setConnections((prev) => ({
        ...prev,
        [message.device.id]: true,
      }));
    }
  }, [message]);

  const handleConnect = (device) => {
    sendMessage({ action: 'connect', id: device.id });
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
