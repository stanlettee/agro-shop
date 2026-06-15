import React from 'react';
import { useParams } from 'react-router-dom';
import news from '../data/news.json';

const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = news.find(item => item.id === parseInt(id, 10));

  if (!newsItem) {
    return (
      <div className="bg-green-600 text-white flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold">Новина не знайдена</h1>
      </div>
    );
  }

  return (
    <div className="bg-green-600 text-white">
      <section className="container mx-auto py-12">
        <nav className="mb-8">
          <Link to="/news" className="text-emerald-700 hover:text-emerald-500">Назад до новин</Link>
        </nav>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4">{newsItem.title}</h1>
          <p className="text-xl font-bold mb-2">{new Date(newsItem.date).toLocaleDateString('uk-UA')}</p>
          <div className="prose leading-relaxed">
            {newsItem.content}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;
