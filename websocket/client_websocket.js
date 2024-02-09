const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', function (event) {
    console.log('Connected to WebSocket server');
});

socket.addEventListener('message', function (event) {
    console.log('Received message from server:', event.data);
});

document.querySelector("button").addEventListener("click", (event) => {
    // Send data to server
    socket.send('Hello, boii!');
    
})

