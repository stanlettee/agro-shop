import React from 'react';

const About = () => {
  return (
    <Layout>
      <section className="container mx-auto py-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 border-b-2 border-emerald-500">Про компанію АгроПро</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-4">Наша історія</h3>
            <ul className="border-l-4 border-emerald-700 pl-6">
              <li className="mb-4">
                <span className="text-xl font-bold mr-2">2005:</span> Заснування компанії
              </li>
              <li className="mb-4">
                <span className="text-xl font-bold mr-2">2010:</span> Вихід на міжнародний ринок
              </li>
              <li className="mb-4">
                <span className="text-xl font-bold mr-2">2018:</span> Запуск цифрової платформи
              </li>
              <li className="mb-4">
                <span className="text-xl font-bold mr-2">2023:</span> 1 млн гектарів під управлінням
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Наша місія</h3>
            <p className="text-xl font-bold mb-4">"Ми робимо сільське господарство ефективним та сталим, впроваджуючи інновації в кожне поле."</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 border-b-2 border-emerald-500">Наша команда</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow overflow-hidden">
            <div className="flex items-center justify-center mb-4 bg-emerald-700 text-white px-4 py-2 rounded-full">ОП</div>
            <h3>Олена Петренко</h3>
            <p>Директор</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow overflow-hidden">
            <div className="flex items-center justify-center mb-4 bg-emerald-700 text-white px-4 py-2 rounded-full">ВА</div>
            <h3>Василь Акимов</h3>
            <p>Замірник</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow overflow-hidden">
            <div className="flex items-center justify-center mb-4 bg-emerald-700 text-white px-4 py-2 rounded-full">ОВ</div>
            <h3>Олександр Вікторович</h3>
            <p>Фахівець</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow overflow-hidden">
            <div className="flex items-center justify-center mb-4 bg-emerald-700 text-white px-4 py-2 rounded-full">ОВ</div>
            <h3>Олена Вікторівна</h3>
            <p>Менеджер</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 border-b-2 border-emerald-500">Наші цінності</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <li className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow overflow-hidden">
            <span className="text-xl font-bold mb-2">Інновації</span>
          </li>
          <li className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow overflow-hidden">
            <span className="text-xl font-bold mb-2">Якість</span>
          </li>
          <li className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow overflow-hidden">
            <span className="text-xl font-bold mb-2">Партнерство</span>
          </li>
          <li className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow overflow-hidden">
            <span className="text-xl font-bold mb-2">Сталість</span>
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export default About;
