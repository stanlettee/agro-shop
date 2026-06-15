import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';

const ProductDetail = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="bg-green-600 text-white flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold">Продукт не знайдено</h1>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== productId)
    .slice(0, 3);

  return (
    <div className="bg-green-600 text-white">
      <section className="container mx-auto py-12">
        <nav className="mb-8">
          <Link to="/products" className="text-emerald-700 hover:text-emerald-500">Назад до продуктів</Link>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <img src={product.image} alt={product.name} className="w-full h-auto mb-4" />
            <h3 className="text-xl font-bold">{product.name}</h3>
            <span className="bg-emerald-700 text-white px-2 py-1 rounded-lg text-sm mb-2">{product.category}</span>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4">
            <p>{product.description}</p>
            <ul className="mt-6 list-disc pl-5">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2">✅</span>
                  {benefit}
                </li>
              ))}
            </ul>

            <h4 className="text-xl font-bold mt-8 mb-4">Відомі продукти цієї категорії:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map(relatedProduct => (
                <div key={relatedProduct.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
                  <Link to={`/products/${relatedProduct.id}`}>
                    <img src={relatedProduct.image} alt={relatedProduct.name} className="w-full h-20 object-cover mb-4" />
                    <h5 className="text-xl font-bold">{relatedProduct.name}</h5>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
