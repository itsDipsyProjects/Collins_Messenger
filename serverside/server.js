const express = require('express');
const path = require('path');

const app = express();
const port = 4000;


/*
  TODO: Understand why the route becomes localhost:4000 
*/

app.use(express.json())
app.use(express.static(path.join(__dirname, '../')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../clientside/login_register/index.html'));
});

app.post('/serverside/server.js', (req, res) => {
  console.log("hello");
  res.send("hello")
});

app.listen(port, () => {
  console.log(__dirname);
  console.log(`Server is running on ${port}`);
});

