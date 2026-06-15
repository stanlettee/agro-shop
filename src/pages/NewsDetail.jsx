import React from 'react';
import { useParams, Link } from 'react-router-dom';
import news from '../data/news.json';

const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = news.find(item => item.id === parseInt(id, 10));

  if (!newsItem) {
    return (
      <div className="bg-brand-light min-h-screen flex items-center justify-center p-6 text-brand-dark">
        <div className="text-center">
          <h1 className="text-3xl font-black text-neutral-900">Новина не знайдена</h1>
          <p className="text-neutral-500 mt-2 mb-6">Вибачте, новину за вашим запитом не знайдено.</p>
          <Link to="/news" className="px-6 py-2.5 bg-brand-green text-white rounded-full font-semibold">
            Назад до новин
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-light min-h-screen text-brand-dark">
      {/* Breadcrumbs */}
      <section className="bg-neutral-100 border-b border-neutral-200/50 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex space-x-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            <Link to="/" className="hover:text-brand-green transition">Головна</Link>
            <span>/</span>
            <Link to="/news" className="hover:text-brand-green transition">Новини</Link>
            <span>/</span>
            <span className="text-neutral-900 truncate max-w-[200px]">{newsItem.title}</span>
          </nav>
        </div>
      </section>

      <section className="container mx-auto py-12 px-4 md:px-6 max-w-3xl">
        <div className="bg-white border border-neutral-100 rounded-3xl p-6 md:p-10 shadow-sm">
          <span className="text-brand-green font-bold text-sm uppercase tracking-wider block mb-4">
            {new Date(newsItem.date).toLocaleDateString('uk-UA', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight mb-6 leading-tight">
            {newsItem.title}
          </h1>
          <hr className="border-neutral-100 my-6" />
          <div className="prose prose-neutral max-w-none text-neutral-600 leading-relaxed text-base space-y-4 font-light">
            {newsItem.content}
          </div>
          <div className="mt-12 pt-6 border-t border-neutral-100 flex justify-between items-center">
            <Link 
              to="/news" 
              className="px-6 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold rounded-full text-sm transition"
            >
              ← Назад до новин
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;
