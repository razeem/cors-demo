// server/server.js
const express = require('express');
const app = express();
const PORT = 3001;

// API endpoint
app.get('/api/data', (req, res) => {
  // Manually set CORS headers
  const allowedOrigins = [
    'http://127.0.0.1:5501',
    'https://razeem.github.io'
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET'); // Allow GET requests
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers

  res.json({ message: 'Hello from the server!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
