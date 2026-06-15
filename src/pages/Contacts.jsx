import React from 'react';

const Contacts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Дякуємо! Ми зв\'яжемося з вами.');
  };

  return (
    <Layout>
      <section className="container mx-auto py-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 border-b-2 border-emerald-500">Контакти</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow overflow-hidden">
            <h3 className="text-xl font-bold mb-4">Контактна інформація</h3>
            <p>Адреса: м. Київ, вул. Агрономічна, 15</p>
            <p>Телефон: +380 44 123 45 67</p>
            <p>Email: info@agropro.ua</p>
            <p>Графік роботи: Пн-Пт: 9:00 - 18:00</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow overflow-hidden">
            <h3 className="text-xl font-bold mb-4">Зв'яжіться з нами</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Ім'я</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Повідомлення</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={3}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-700 text-white py-2 px-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Надіслати
              </button>
            </form>
          </div>

          <div className="bg-gray-900 h-64 flex items-center justify-center">
            Карта Google Maps
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacts;
