import React from 'react';
import { Link } from 'react-router-dom';
import news from '../data/news.json';

const News = () => {
  const sortedNews = [...news].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="bg-green-600 text-white">
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Новини та події</h2>
        <ul className="grid grid-cols-1 gap-6">
          {sortedNews.map(item => (
            <li key={item.id} className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg">
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

export default News;
