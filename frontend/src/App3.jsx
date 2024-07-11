import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [devices, setDevices] = useState([]);
  const [selectedDevices, setSelectedDevices] = useState([]);

  useEffect(() => {
    axios.get('/api/devices')
      .then(response => {
        if (Array.isArray(response.data)) {
          setDevices(response.data);
        } else {
          console.error('Invalid data format:', response.data);
          setDevices([]);
        }
      })
      .catch(error => {
        console.error('Error fetching devices:', error);
        setDevices([]);
      });
  }, []);

  const handleDeviceSelect = (device) => {
    setSelectedDevices((prevSelected) => {
      if (prevSelected.includes(device)) {
        return prevSelected.filter((d) => d !== device);
      } else {
        return [...prevSelected, device];
      }
    });
  };

  const connectToDevices = () => {
    selectedDevices.forEach(device => {
      const ws = new WebSocket(`ws://localhost:3001/${device.id}`);
      ws.onopen = () => {
        console.log(`Connected to device ${device.name}`);
      };
      ws.onmessage = (event) => {
        console.log(`Message from device ${device.name}: ${event.data}`);
      };
      ws.onclose = () => {
        console.log(`Disconnected from device ${device.name}`);
      };
    });
  };

  return (
    <div>
      <h1>Nearby TV Devices</h1>
      <ul>
        {devices.map(device => (
          <li key={device.id}>
            <label>
              <input
                type="checkbox"
                checked={selectedDevices.includes(device)}
                onChange={() => handleDeviceSelect(device)}
              />
              {device.name}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={connectToDevices}>Connect</button>
    </div>
  );
};

export default App;
