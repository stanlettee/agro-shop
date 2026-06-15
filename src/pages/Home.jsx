import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Layout>
      <section className="container mx-auto py-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 border-b-2 border-emerald-500">Інноваційні рішення для вашого поля</h1>
        <p className="leading-relaxed text-gray-700 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          Сучасне насіння, захист рослин та цифрові інструменти. Ми пропонуємо найкращі рішення для вашого сільського господарства.
        </p>
        <Link to="/products" className="mt-8 px-6 py-3 bg-emerald-700 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">Дізнатися більше</Link>
      </section>
    </Layout>
  );
};

export default Home;
