import React from 'react';
import { Link } from 'react-router-dom';
import news from '../data/news.json';

const Home = () => {
  return (
    <div className="bg-green-600 text-white">
      {/* Hero Section */}
      <section className="hero bg-gradient-to-br from-emerald-700 to-green-500 min-h-screen flex items-center justify-center">
        <div className="container mx-auto text-center p-8">
          <h1 className="text-4xl font-bold">Інноваційні рішення для вашого поля</h1>
          <p className="mt-4 text-xl">Сучасне насіння, захист рослин та цифрові інструменти</p>
          <Link to="/products" className="mt-8 px-6 py-3 bg-white text-emerald-700 rounded-full hover:bg-emerald-500 hover:text-white transition duration-300">Детальніше</Link>
        </div>
      </section>

      {/* Наші рішення Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Наші рішення</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-4">Насіння</h3>
            <p>Високоврожайний гібрид, стійкий до посухи та шкідників.</p>
            <Link to="/products?category=Seeds" className="mt-4 px-6 py-2 bg-emerald-700 text-white rounded-full hover:bg-emerald-500 hover:text-black transition duration-300">Детальніше</Link>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-4">Захист рослин</h3>
            <p>Контроль захисту від шкідників та посухи.</p>
            <Link to="/products?category=Plant Protection" className="mt-4 px-6 py-2 bg-emerald-700 text-white rounded-full hover:bg-emerald-500 hover:text-black transition duration-300">Детальніше</Link>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-4">Цифрові інструменти</h3>
            <p>Оптимізація продуктивності, автоматизація.</p>
            <Link to="/products?category=Digital Solutions" className="mt-4 px-6 py-2 bg-emerald-700 text-white rounded-full hover:bg-emerald-500 hover:text-black transition duration-300">Детальніше</Link>
          </div>
        </div>
      </section>

      {/* Останні новини Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Останні новини</h2>
        <ul className="grid grid-cols-1 gap-6">
          {news.slice(0, 3).map(item => (
            <li key={item.id} className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex items-center justify-between mb-4">
                <span>{new Date(item.date).toLocaleDateString('uk-UA')}</span>
                <Link to={`/news/${item.id}`} className="text-emerald-700 hover:text-emerald-500">Детальніше</Link>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p>{item.excerpt}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
