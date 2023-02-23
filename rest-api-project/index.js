/**
 * Initial steps: 
 * go into folder on command line, do npm init, npm install express, npm install nodemon --save-dev
 * 
 * Code to get a simple server running
 * source: https://dev.to/miku86/nodejs-how-to-create-a-simple-server-using-express-1n9d#:~:text=Write%20a%20simple%20script&text=%2F%2F%20import%20express%20(after%20npm,res)%20%3D%3E%20%7B%20res.
 */

// import express (after npm install express)
const express = require('express');

// add some security by using cors 
const cors = require("cors");

// create new express app and save it as "app"
const app = express();

// server configuration
const PORT = 5005;

app.use(cors(PORT));

// create a route for the app
app.get('/', (request, response) => {
  response.send('Hello World');
});

// create a route to books for the app 
app.get('/books/', (request, response) => {
    response.send("In the books portion");
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});

