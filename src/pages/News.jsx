import React from 'react';
import { Link } from 'react-router-dom';
import news from '../data/news.json';

const News = () => {
  const sortedNews = [...news].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="bg-brand-light min-h-screen text-brand-dark">
      {/* Banner */}
      <section className="bg-neutral-950 py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(22,101,52,0.3),transparent_40%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Новини та події</h1>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto font-light">
            Останні новинки компанії, корисні агропоради та інноваційні дослідження для вашої справи.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4 md:px-6 max-w-4xl">
        <div className="space-y-8">
          {sortedNews.map(item => (
            <article key={item.id} className="bg-white border border-neutral-100 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="text-sm text-brand-green font-bold tracking-wider uppercase">
                  {new Date(item.date).toLocaleDateString('uk-UA', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
                <Link 
                  to={`/news/${item.id}`} 
                  className="text-xs font-bold uppercase tracking-wider bg-emerald-50 text-brand-green px-3 py-1 rounded-full hover:bg-brand-lime transition"
                >
                  Читати повністю
                </Link>
              </div>
              <h3 className="text-2xl font-black text-neutral-900 hover:text-brand-green transition mb-3 leading-tight">
                <Link to={`/news/${item.id}`}>{item.title}</Link>
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm mb-6">
                {item.excerpt}
              </p>
              <div className="flex items-center">
                <Link 
                  to={`/news/${item.id}`} 
                  className="text-brand-green font-semibold text-sm inline-flex items-center hover:text-emerald-500 transition"
                >
                  Переглянути матеріал <span className="ml-1.5">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default News;
