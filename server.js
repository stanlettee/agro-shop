const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

// API: отдаём товары
app.get('/api/products', (req, res) => {
  const dataPath = path.join(__dirname, 'src', 'data', 'products.json');
  try {
    const products = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Ошибка загрузки данных' });
  }
});

// В production отдаём собранную папку dist
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  // Catch-all для SPA – используем '/*' (работает в новых версиях)
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
} else {
  // В dev-режиме React запускается отдельно (npm run dev), сервер только для API
  app.use((req, res) => {
    res.send('Сервер работает. Для разработки используйте "npm run dev" отдельно.');
  });
}

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});