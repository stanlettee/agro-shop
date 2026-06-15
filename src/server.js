const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'dist' folder (or 'build' for CRA)
app.use(express.static(path.join(__dirname, 'dist')));

// GET /api/products endpoint
app.get('/api/products', (req, res) => {
  const products = require('./src/data/products.json');
  res.json(products);
});

// Fallback route to serve index.html for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
