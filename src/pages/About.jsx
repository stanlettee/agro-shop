import React from 'react';

const About = () => {
  return (
    <div className="bg-brand-light text-brand-dark">
      {/* Hero Header */}
      <section className="bg-neutral-950 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(22,101,52,0.3),transparent_40%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="inline-block bg-brand-lime/15 border border-brand-lime/30 text-brand-lime px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Хто ми є
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Про компанію АгроПро</h1>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto font-light text-base">
            Інноваційний партнер для кожного аграрія, що забезпечує сталий розвиток українських земель.
          </p>
        </div>
      </section>

      {/* Наша місія Section */}
      <section className="container mx-auto py-16 px-4 md:px-6 max-w-4xl text-center">
        <h2 className="text-xs font-bold uppercase tracking-widest text-brand-green mb-2">Наше призначення</h2>
        <h3 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 mb-6">Наша місія</h3>
        <div className="bg-white border border-neutral-100 shadow-sm rounded-3xl p-8 md:p-12 relative">
          <span className="text-6xl text-brand-lime/30 absolute top-4 left-6 font-serif">“</span>
          <p className="text-xl md:text-2xl font-medium text-neutral-800 leading-relaxed italic relative z-10">
            Ми робимо сільське господарство ефективним та сталим, впроваджуючи інновації в кожне поле.
          </p>
          <span className="text-6xl text-brand-lime/30 absolute bottom-4 right-6 font-serif">”</span>
        </div>
      </section>

      {/* Наша історія Section */}
      <section className="bg-white border-y border-neutral-100 py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-green">Етапи зростання</h2>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 mt-1">Наша історія</h3>
          </div>
          <div className="relative border-l-2 border-neutral-100 pl-6 space-y-12 ml-4">
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-brand-green border-4 border-white"></div>
              <span className="text-xl font-bold text-brand-green block mb-1">2005 рік</span>
              <p className="text-neutral-600 text-sm leading-relaxed">Заснування компанії АгроПро в якості дистриб'ютора насіння.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-brand-green border-4 border-white"></div>
              <span className="text-xl font-bold text-brand-green block mb-1">2010 рік</span>
              <p className="text-neutral-600 text-sm leading-relaxed">Розширення портфоліо препаратами захисту рослин та вихід на міжнародні ринки.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-brand-green border-4 border-white"></div>
              <span className="text-xl font-bold text-brand-green block mb-1">2018 рік</span>
              <p className="text-neutral-600 text-sm leading-relaxed">Запуск унікальної цифрової платформи аналізу полів для точного землеробства.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-brand-green border-4 border-white"></div>
              <span className="text-xl font-bold text-brand-green block mb-1">2023 рік</span>
              <p className="text-neutral-600 text-sm leading-relaxed">Понад 1 млн гектарів українських полів під управлінням та супроводом наших фахівців.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Команда Section */}
      <section className="container mx-auto py-20 px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-green">Наші експерти</h2>
          <h3 className="text-3xl font-black tracking-tight text-neutral-900 mt-2">Команда лідерів</h3>
          <div className="w-16 h-1 bg-brand-lime mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group bg-white border border-neutral-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition duration-300">
            <div className="w-16 h-16 bg-brand-green/10 text-brand-green font-bold text-xl flex items-center justify-center rounded-full mx-auto mb-4 group-hover:bg-brand-lime transition duration-300">ОП</div>
            <h4 className="font-bold text-lg text-neutral-900">Олена Петренко</h4>
            <p className="text-neutral-500 text-sm mt-1">Директор</p>
          </div>
          <div className="group bg-white border border-neutral-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition duration-300">
            <div className="w-16 h-16 bg-brand-green/10 text-brand-green font-bold text-xl flex items-center justify-center rounded-full mx-auto mb-4 group-hover:bg-brand-lime transition duration-300">ВА</div>
            <h4 className="font-bold text-lg text-neutral-900">Василь Акимов</h4>
            <p className="text-neutral-500 text-sm mt-1">Замірник</p>
          </div>
          <div className="group bg-white border border-neutral-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition duration-300">
            <div className="w-16 h-16 bg-brand-green/10 text-brand-green font-bold text-xl flex items-center justify-center rounded-full mx-auto mb-4 group-hover:bg-brand-lime transition duration-300">ОВ</div>
            <h4 className="font-bold text-lg text-neutral-900">Олександр Вікторович</h4>
            <p className="text-neutral-500 text-sm mt-1">Фахівець</p>
          </div>
          <div className="group bg-white border border-neutral-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition duration-300">
            <div className="w-16 h-16 bg-brand-green/10 text-brand-green font-bold text-xl flex items-center justify-center rounded-full mx-auto mb-4 group-hover:bg-brand-lime transition duration-300">ОВ</div>
            <h4 className="font-bold text-lg text-neutral-900">Олена Вікторівна</h4>
            <p className="text-neutral-500 text-sm mt-1">Менеджер</p>
          </div>
        </div>
      </section>

      {/* Наші цінності Section */}
      <section className="bg-neutral-100/50 border-t border-neutral-100 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-green">Чому обирають нас</h2>
            <h3 className="text-3xl font-black tracking-tight text-neutral-900 mt-2">Наші цінності</h3>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <li className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <span className="text-brand-green font-black text-lg block mb-2">Інновації</span>
              <p className="text-neutral-500 text-sm leading-relaxed">Впровадження новітніх технологій і досліджень для вдосконалення аграрних процесів.</p>
            </li>
            <li className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <span className="text-brand-green font-black text-lg block mb-2">Якість</span>
              <p className="text-neutral-500 text-sm leading-relaxed">Високі стандарти якості кожної зернини та препарату, що постачається.</p>
            </li>
            <li className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <span className="text-brand-green font-black text-lg block mb-2">Партнерство</span>
              <p className="text-neutral-500 text-sm leading-relaxed">Довготривала співпраця та надійна підтримка кожного українського господарства.</p>
            </li>
            <li className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <span className="text-brand-green font-black text-lg block mb-2">Сталість</span>
              <p className="text-neutral-500 text-sm leading-relaxed">Відповідальне ставлення до землі та екологічне використання природних ресурсів.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
