const express = require('express');
const app = express();
const port = 5000;

const products = [
  {
    id: 1,
    name: "Гербіцид Мастер Пауєр",
    category: "Гербіциди",
    shortDescription: "Післясходовий гербіцид для захисту кукурудзи.",
    description: "Унікальний гербіцид, який контролює повний спектр бур'янів.",
    benefits: ["Повний контроль бур'янів", "Безпека для культури"],
    image: "[https://images.unsplash.com/photo-1625246333195-78d9c38ad451?w=500](https://images.unsplash.com/photo-1625246333195-78d9c38ad451?w=500)"
  },
  {
    id: 2,
    name: "Фунгіцид Хорус",
    category: "Фунгіциди",
    shortDescription: "Надійний захист садів від хвороб.",
    description: "Надзвичайний системний фунгіцид для захисту плодових культур.",
    benefits: ["Діє при низьких температурах", "Лікувальна дія"],
    image: "[https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?w=500](https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?w=500)"
  }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});