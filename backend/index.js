const express = require('express');
const path = require('path');

// could be use later to do some react render etc

const app = express();
const port = process.env.PORT || 4200;
const frontDirectory = 'frontend';
const frontIndex = 'index.html';
// Start the server
app.listen(port);

// Get our request parameters
app.use(express.static(path.join(__dirname, frontDirectory)));

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, frontDirectory, frontIndex));
});

console.log(`:) watch out your app: http://localhost: ${port}`);
