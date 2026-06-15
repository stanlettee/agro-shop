import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <Layout>
      <section className="container mx-auto py-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 border-b-2 border-emerald-500">Наші продукти</h1>

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link to={`/products/${product.id}`} key={product.id}>
                <ProductCard product={product} />
              </Link>
            ))
          ) : (
            <p className="text-center text-lg text-white/80">
              Немає продуктів у цій категорії.
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Products;
