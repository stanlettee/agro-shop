import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [category, setCategory] = React.useState('All');

  const filteredProducts = category === 'All' ? products : products.filter(p => p.category === category);

  return (
    <div className="bg-green-600 text-white">
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Продукти</h2>
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setCategory('All')}
            className={`px-4 py-2 bg-white text-emerald-700 rounded-full hover:bg-emerald-500 hover:text-white transition ${category === 'All' ? 'bg-emerald-700 text-white' : ''}`}
          >
            Всі
          </button>
          <button
            onClick={() => setCategory('Seeds')}
            className={`px-4 py-2 bg-white text-emerald-700 rounded-full hover:bg-emerald-500 hover:text-white transition ${category === 'Seeds' ? 'bg-emerald-700 text-white' : ''}`}
          >
            Насіння
          </button>
          <button
            onClick={() => setCategory('Plant Protection')}
            className={`px-4 py-2 bg-white text-emerald-700 rounded-full hover:bg-emerald-500 hover:text-white transition ${category === 'Plant Protection' ? 'bg-emerald-700 text-white' : ''}`}
          >
            Захист рослин
          </button>
          <button
            onClick={() => setCategory('Digital Solutions')}
            className={`px-4 py-2 bg-white text-emerald-700 rounded-full hover:bg-emerald-500 hover:text-white transition ${category === 'Digital Solutions' ? 'bg-emerald-700 text-white' : ''}`}
          >
            Цифрові рішення
          </button>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Products;
