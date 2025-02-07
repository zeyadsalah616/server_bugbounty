const express = require('express');
const fs = require('fs');
const app = express();

// Route to receive data from the query string and create a file
app.get('/create-file', (req, res) => {
  const data = req.query.data;  // Get data from the URL query parameter

  // Check if data was provided
  if (!data) {
    return res.status(400).send('No data provided');
  }

  // Create a file and save the data
  fs.writeFile('output.txt', data, (err) => {
    if (err) {
      return res.status(500).send('Error writing file');
    }
    res.send('File created successfully');
  });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
