import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Contacts from './pages/Contacts';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/agro-shop/" element={<Layout><Home /></Layout>} />
        <Route path="/agro-shop/products" element={<Layout><Products /></Layout>} />
        <Route path="/agro-shop/products/:id" element={<Layout><ProductDetail /></Layout>} />
        <Route path="/agro-shop/about" element={<Layout><About /></Layout>} />
        <Route path="/agro-shop/news" element={<Layout><News /></Layout>} />
        <Route path="/agro-shop/news/:id" element={<Layout><NewsDetail /></Layout>} />
        <Route path="/agro-shop/contacts" element={<Layout><Contacts /></Layout>} />
        <Route path="*" element={<Layout><div>Сторінку не знайдено</div></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
