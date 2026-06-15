import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [category, setCategory] = React.useState('All');

  const filteredProducts =
    category === 'All'
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className="bg-green-600 text-white min-h-screen">
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Продукти</h2>

        {/* Фільтрація */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['All', 'Насіння', 'Захист рослин', 'Цифрові рішення'].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2 rounded-full font-medium transition
                  ${
                    category === cat
                      ? 'bg-white text-emerald-700 shadow-md'
                      : 'bg-white/20 text-white hover:bg-white/40'
                  }`}
              >
                {cat === 'All' ? 'Всі' : cat}
              </button>
            )
          )}
        </div>

        {/* Сітка продуктів */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link to={`/products/${product.id}`} key={product.id}>
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-white/80">
            Немає продуктів у цій категорії.
          </p>
        )}
      </section>
    </div>
  );
};

export default Products;