import React from 'react';

const About = () => {
  return (
    <div className="bg-green-600 text-white">
      {/* Page Header */}
      <section className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Про компанію АгроПро</h1>
      </section>

      {/* Наша історія Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Наша історія</h2>
        <div className="flex flex-col items-center">
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
      </section>

      {/* Наша місія Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Наша місія</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-xl font-bold mb-4">"Ми робимо сільське господарство ефективним та сталим, впроваджуючи інновації в кожне поле."</p>
        </div>
      </section>

      {/* Команда Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Команда</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
            <div className="flex items-center justify-center mb-4 bg-emerald-700 text-white px-4 py-2 rounded-full">ОП</div>
            <h3>Олена Петренко</h3>
            <p>Директор</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
            <div className="flex items-center justify-center mb-4 bg-emerald-700 text-white px-4 py-2 rounded-full">ВА</div>
            <h3>Василь Акимов</h3>
            <p>Замірник</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
            <div className="flex items-center justify-center mb-4 bg-emerald-700 text-white px-4 py-2 rounded-full">ОВ</div>
            <h3>Олександр Вікторович</h3>
            <p>Фахівець</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
            <div className="flex items-center justify-center mb-4 bg-emerald-700 text-white px-4 py-2 rounded-full">ОВ</div>
            <h3>Олена Вікторівна</h3>
            <p>Менеджер</p>
          </div>
        </div>
      </section>

      {/* Наші цінності Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Наші цінності</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <li className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
            <span className="text-xl font-bold mb-2">Інновації</span>
          </li>
          <li className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
            <span className="text-xl font-bold mb-2">Якість</span>
          </li>
          <li className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
            <span className="text-xl font-bold mb-2">Партнерство</span>
          </li>
          <li className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
            <span className="text-xl font-bold mb-2">Сталість</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
