import React from 'react';
import { Link } from 'react-router-dom';
import news from '../data/news.json';

const Home = () => {
  return (
    <div className="bg-brand-light text-brand-dark">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-neutral-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={"https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80"} 
            alt="Agro field" 
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-900/50"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl py-20">
          <span className="inline-block bg-brand-lime/15 border border-brand-lime/30 text-brand-lime px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Майбутнє агросектору вже сьогодні
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none">
            Інновації для <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-green-400">вашого врожаю</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto font-light">
            Сучасне високопродуктивне насіння, комплексний захист рослин та цифрові інструменти нового покоління. Оптимізуйте кожен гектар вашого поля разом з нами.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/products" 
              className="w-full sm:w-auto px-8 py-4 bg-brand-lime text-brand-green font-bold rounded-full shadow-lg shadow-brand-lime/25 hover:bg-white hover:text-brand-green hover:shadow-xl transition duration-300 transform hover:-translate-y-0.5 text-center"
            >
              Перейти до продуктів
            </Link>
            <Link 
              to="/about" 
              className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition duration-300 text-center backdrop-blur-sm"
            >
              Про компанію
            </Link>
          </div>
        </div>
      </section>

      {/* Наші рішення Section */}
      <section className="container mx-auto py-24 px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-green">Ефективне рослинництво</h2>
          <p className="text-3xl md:text-4xl font-black tracking-tight text-neutral-900 mt-2">Наші рішення</p>
          <div className="w-16 h-1 bg-brand-lime mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-white border border-neutral-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-brand-green transition duration-300 transform hover:-translate-y-2 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-brand-green text-3xl mb-6 group-hover:bg-brand-lime group-hover:text-brand-green transition duration-300">
                🌾
              </div>
              <h3 className="text-2xl font-bold mb-3 text-neutral-900 group-hover:text-brand-green transition">Насіння</h3>
              <p className="text-neutral-600 leading-relaxed text-sm">
                Високоврожайні гібриди зернових та технічних культур, адаптовані до кліматичних умов України з гарантованою стійкістю до посухи.
              </p>
            </div>
            <Link 
              to="/products" 
              className="mt-8 inline-flex items-center text-brand-green font-semibold text-sm hover:text-emerald-500 transition duration-300"
            >
              Дізнатись більше <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="group bg-white border border-neutral-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-brand-green transition duration-300 transform hover:-translate-y-2 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-brand-green text-3xl mb-6 group-hover:bg-brand-lime group-hover:text-brand-green transition duration-300">
                🛡️
              </div>
              <h3 className="text-2xl font-bold mb-3 text-neutral-900 group-hover:text-brand-green transition">Захист рослин</h3>
              <p className="text-neutral-600 leading-relaxed text-sm">
                Екологічні та ультраефективні засоби захисту від бур'янів, шкідників і захворювань на кожному етапі вегетації.
              </p>
            </div>
            <Link 
              to="/products" 
              className="mt-8 inline-flex items-center text-brand-green font-semibold text-sm hover:text-emerald-500 transition duration-300"
            >
              Дізнатись більше <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="group bg-white border border-neutral-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-brand-green transition duration-300 transform hover:-translate-y-2 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-brand-green text-3xl mb-6 group-hover:bg-brand-lime group-hover:text-brand-green transition duration-300">
                📊
              </div>
              <h3 className="text-2xl font-bold mb-3 text-neutral-900 group-hover:text-brand-green transition">Цифрові інструменти</h3>
              <p className="text-neutral-600 leading-relaxed text-sm">
                Інноваційний аналіз та автоматизація господарства. Системи моніторингу погоди, супутникових знімків та точного землеробства.
              </p>
            </div>
            <Link 
              to="/products" 
              className="mt-8 inline-flex items-center text-brand-green font-semibold text-sm hover:text-emerald-500 transition duration-300"
            >
              Дізнатись більше <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Останні новини Section */}
      <section className="bg-neutral-100/50 border-t border-neutral-100 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-brand-green">Будьте в курсі подій</h2>
              <p className="text-3xl md:text-4xl font-black tracking-tight text-neutral-900 mt-2">Останні новини</p>
            </div>
            <Link 
              to="/news" 
              className="px-6 py-2.5 bg-white text-neutral-800 border border-neutral-200 hover:border-brand-green hover:text-brand-green font-semibold rounded-full shadow-sm hover:shadow transition duration-300 text-sm"
            >
              Всі новини
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.slice(0, 3).map(item => (
              <article key={item.id} className="bg-white border border-neutral-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 flex flex-col justify-between">
                <div className="p-6">
                  <span className="text-xs text-brand-green font-semibold tracking-wider block mb-3">
                    {new Date(item.date).toLocaleDateString('uk-UA', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 hover:text-brand-green transition leading-snug">
                    <Link to={`/news/${item.id}`}>{item.title}</Link>
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
                <div className="px-6 pb-6 pt-2 border-t border-neutral-50/50">
                  <Link 
                    to={`/news/${item.id}`} 
                    className="text-brand-green hover:text-emerald-500 text-sm font-semibold transition inline-flex items-center"
                  >
                    Читати далі <span className="ml-1.5">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
