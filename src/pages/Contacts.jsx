import React from 'react';

const Contacts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Дякуємо! Ми зв\'яжемося з вами.');
  };

  return (
    <div className="bg-green-600 text-white">
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Контакти</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Контактна інформація</h3>
            <p>Адреса: м. Київ, вул. Агрономічна, 15</p>
            <p>Телефон: +380 44 123 45 67</p>
            <p>Email: info@agropro.ua</p>
            <p>Графік роботи: Пн-Пт: 9:00 - 18:00</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
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
                className="w-full bg-emerald-700 text-white py-2 px-4 rounded hover:bg-emerald-800 transition duration-300"
              >
                Надіслати
              </button>
            </form>
          </div>

          <div className="bg-gray-300 h-64 flex items-center justify-center">
            Карта Google Maps
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
