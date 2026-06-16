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
    <div className="bg-brand-light min-h-screen text-brand-dark">
      {/* Banner */}
      <section className="bg-neutral-950 py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(22,101,52,0.3),transparent_40%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Наші продукти</h1>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto font-light">
            Інноваційні технології, адаптовані до кліматичних умов для досягнення найвищої врожайності.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4 md:px-6">
        {/* Фільтрація */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['All', 'Насіння', 'Захист рослин', 'Цифрові рішення'].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition duration-300 shadow-sm
                  ${
                    category === cat
                      ? 'bg-brand-green text-white shadow-md shadow-brand-green/10'
                      : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100 hover:border-neutral-300'
                  }`}
              >
                {cat === 'All' ? 'Всі рішення' : cat}
              </button>
            )
          )}
        </div>

        {/* Сітка продуктів */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link to={`/agro-shop/products/${product.id}`} key={product.id}>
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-3xl border border-neutral-100 p-8">
            <p className="text-lg text-neutral-500">
              Немає продуктів у цій категорії.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Products;
