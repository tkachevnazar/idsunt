// Express.js server setup example

const express = require('express');
const app = express();

// Host and port configuration
const host = '0.0.0.0'; // Bind to all available network interfaces
const port = 8080;

// Sample route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Starting the server
app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
