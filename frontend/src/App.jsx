// // import { useState, useEffect } from 'react';

// // function App() {
// //   const [randomNumber, setRandomNumber] = useState('');
// //   const [statusMessage, setStatusMessage] = useState('');
// //   const [ws, setWs] = useState(null);

// //   useEffect(() => {
// //     const websocket = new WebSocket('ws://localhost:4000');
// //     setWs(websocket);

// //     websocket.onopen = () => {
// //       console.log('WebSocket connected');
// //       setStatusMessage('WebSocket connected');
// //     };

// //     websocket.onmessage = (event) => {
// //       console.log('Message received:', event.data);
// //       setRandomNumber(event.data); // Update state with the received random number
// //       setStatusMessage('Random number received');
// //     };

// //     websocket.onerror = (error) => {
// //       console.error('WebSocket error:', error);
// //       setStatusMessage('WebSocket error');
// //     };

// //     websocket.onclose = () => {
// //       console.log('WebSocket disconnected');
// //       setStatusMessage('WebSocket disconnected');
// //     };

// //     return () => {
// //       websocket.close();
// //     };
// //   }, []);

// //   const generateRandomNumber = () => {
// //     if (ws && ws.readyState === WebSocket.OPEN) {
// //       console.log('Sending generateRandomNumber message');
// //       setStatusMessage('Sending generateRandomNumber message');
// //       ws.send('generateRandomNumber');
// //     } else {
// //       console.warn('WebSocket not connected');
// //       setStatusMessage('WebSocket not connected');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Random Number Generator</h1>
// //       <button onClick={generateRandomNumber}>Generate Random Number</button>
// //       {randomNumber && <p>Random Number: {randomNumber}</p>}
// //       <p>Status: {statusMessage}</p>
// //     </div>
// //   );
// // }

// // export default App;

// import { useState, useEffect } from 'react';

// const App = () => {
//   const [randomNumber, setRandomNumber] = useState('');
//   const [statusMessage, setStatusMessage] = useState('');
//   const [ws, setWs] = useState(null);

//   useEffect(() => {
//     const websocket = new WebSocket('ws://localhost:4000');
//     setWs(websocket);

//     const handleOpen = () => {
//       console.log('WebSocket connected');
//       setStatusMessage('WebSocket connected');
//     };

//     const handleMessage = (event) => {
//       console.log('Message received:', event.data);
//       setRandomNumber(event.data);
//       setStatusMessage('Random number received');
//     };

//     const handleError = (error) => {
//       console.error('WebSocket error:', error);
//       setStatusMessage('WebSocket error');
//     };

//     const handleClose = () => {
//       console.log('WebSocket disconnected');
//       setStatusMessage('WebSocket disconnected');
//     };

//     websocket.addEventListener('open', handleOpen);
//     websocket.addEventListener('message', handleMessage);
//     websocket.addEventListener('error', handleError);
//     websocket.addEventListener('close', handleClose);

//     return () => {
//       websocket.close();
//     };
//   }, []);

//   const generateRandomNumber = () => {
//     if (ws && ws.readyState === WebSocket.OPEN) {
//       console.log('Sending generateRandomNumber message');
//       setStatusMessage('Sending generateRandomNumber message');
//       ws.send('generateRandomNumber');
//     } else {
//       console.warn('WebSocket not connected');
//       setStatusMessage('WebSocket not connected');
//     }
//   };

//   return (
//     <div>
//       <h1>Random Number Generator</h1>
//       <button onClick={generateRandomNumber}>Generate Random Number</button>
//       {randomNumber && <p>Random Number: {randomNumber}</p>}
//       <p>Status: {statusMessage}</p>
//     </div>
//   );
// };

// export default App;
