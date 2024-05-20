const http = require('http');
const WebSocket = require('ws');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('WebSocket server\n');
  
});

// Create a WebSocket server instance by passing the HTTP server as an argument
const wss = new WebSocket.Server({ server });

// Event listener for when a client connects
wss.on('connection', function connection(ws, req) {
  console.log('A client connected');
  

  // Event listener for when the server receives a message from a client
  ws.on('message', function incoming(message) {
    console.log('Received message:', message);

    // Echo the received message back to the client
    ws.send('Echo: ' + message);
  });

  // Event listener for when the client closes the connection
  ws.on('close', function close() {
    console.log('Client disconnected');
  });
});

// Start the HTTP server on port 8080
server.listen(8080, () => {
  console.log('HTTP server running on port 8080');
});
