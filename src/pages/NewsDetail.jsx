import React from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = news.find(item => item.id === parseInt(id, 10));

  if (!newsItem) {
    return (
      <Layout>
        <section className="container mx-auto py-20">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-emerald-500">Новина не знайдена</h1>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="container mx-auto py-20">
        <nav className="mb-8">
          <Link to="/news" className="text-emerald-700 hover:text-emerald-500">Назад до новин</Link>
        </nav>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4">{newsItem.title}</h1>
          <p className="text-xl font-bold mb-2">{new Date(newsItem.date).toLocaleDateString('uk-UA')}</p>
          <div className="prose leading-relaxed text-gray-700 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {newsItem.content}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsDetail;
