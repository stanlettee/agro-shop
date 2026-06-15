import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products.json';

const ProductDetail = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="bg-brand-light min-h-screen flex items-center justify-center p-6 text-brand-dark">
        <div className="text-center">
          <h1 className="text-3xl font-black text-neutral-900">Продукт не знайдено</h1>
          <p className="text-neutral-500 mt-2 mb-6">Вибачте, запитуваний продукт не існує в нашому каталозі.</p>
          <Link to="/products" className="px-6 py-2.5 bg-brand-green text-white rounded-full font-semibold">
            Назад до продуктів
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== productId)
    .slice(0, 3);

  return (
    <div className="bg-brand-light min-h-screen text-brand-dark">
      {/* Premium Breadcrumbs */}
      <section className="bg-neutral-100 border-b border-neutral-200/50 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex space-x-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            <Link to="/" className="hover:text-brand-green transition">Головна</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-brand-green transition">Продукти</Link>
            <span>/</span>
            <span className="text-neutral-900 truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Image */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-neutral-100 rounded-3xl overflow-hidden shadow-sm p-4 sticky top-28">
              <div className="aspect-square bg-neutral-50 rounded-2xl overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <span className="inline-block bg-brand-lime/15 text-brand-green font-bold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight mb-6">
                {product.name}
              </h1>
              
              <div className="prose prose-neutral leading-relaxed text-neutral-600 mb-8">
                <p className="text-lg font-light leading-relaxed mb-6">{product.description}</p>
                
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Головні переваги:</h3>
                <ul className="space-y-3 pl-1">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-50 text-brand-green flex items-center justify-center text-xs font-bold mr-3 mt-0.5">✓</span>
                      <span className="text-neutral-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-12 border-t border-neutral-200">
            <h2 className="text-2xl font-black text-neutral-900 tracking-tight mb-8">
              Схожі продукти цієї категорії:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map(relatedProduct => (
                <div key={relatedProduct.id} className="group bg-white border border-neutral-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
                  <Link to={`/products/${relatedProduct.id}`} className="block">
                    <div className="aspect-video bg-neutral-100 overflow-hidden">
                      <img src={relatedProduct.image} alt={relatedProduct.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-neutral-900 group-hover:text-brand-green transition leading-snug mb-1">{relatedProduct.name}</h3>
                      <span className="text-xs text-brand-green font-semibold uppercase tracking-wider">{relatedProduct.category}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductDetail;
