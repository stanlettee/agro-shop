import React, { useState } from 'react';

const Contacts = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      /* 
        NOTE FOR DEVELOPER (English_Ireland):
        Currently, feedback messages are processed solely on the client-side (UI level).
        They do not go to any external server or inbox yet.
        To send them to an actual backend or email service, you can integrate an API call here:
        
        fetch('https://your-api-endpoint.com/feedback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
      */
      console.log('Feedback submitted locally:', formData);

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    }
  };

  return (
    <div className="bg-brand-light text-brand-dark min-h-screen">
      {/* Banner */}
      <section className="bg-neutral-950 py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(22,101,52,0.3),transparent_40%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Контакти</h1>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto font-light">
            Маєте запитання? Зв'яжіться з нашими фахівцями для отримання кваліфікованої консультації.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-neutral-100 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-black text-neutral-900 mb-6">Контактна інформація</h3>
              
              <div className="space-y-6 text-sm">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📍</span>
                  <div>
                    <h4 className="font-bold text-neutral-800">Адреса офісу</h4>
                    <p className="text-neutral-500 mt-1">м. Київ, вул. Агрономічна, 15</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-2xl mr-4">📞</span>
                  <div>
                    <h4 className="font-bold text-neutral-800">Телефон гарячої лінії</h4>
                    <p className="text-neutral-500 mt-1">+380 44 123 45 67</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-2xl mr-4">✉️</span>
                  <div>
                    <h4 className="font-bold text-neutral-800">Електронна адреса</h4>
                    <p className="text-neutral-500 mt-1">info@agropro.ua</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-2xl mr-4">⏰</span>
                  <div>
                    <h4 className="font-bold text-neutral-800">Режим роботи</h4>
                    <p className="text-neutral-500 mt-1">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Google Map */}
            <div className="h-64 bg-neutral-900 rounded-3xl overflow-hidden relative group shadow-sm flex items-center justify-center text-center p-6 border border-neutral-100">
              <div className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:scale-105 transition duration-500" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80')" }}></div>
              <div className="relative z-10">
                <span className="text-3xl block mb-2">🗺️</span>
                <span className="text-white font-bold block text-sm">Карта проїзду</span>
                <span className="text-xs text-neutral-400 mt-1 block">Натисніть для відкриття маршруту</span>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-neutral-100 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-black text-neutral-900 mb-2">Зворотний зв'язок</h3>
              <p className="text-sm text-neutral-500 mb-6">Заповніть форму, і наші консультанти зателефонують вам найближчим часом.</p>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-emerald-50 border border-brand-green/20 text-brand-green text-sm rounded-2xl flex items-center">
                  <span className="text-lg mr-2">✓</span>
                  Дякуємо! Ваше повідомлення успішно надіслано. Ми зв'яжемося з вами найближчим часом.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">Ім'я</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Введіть ваше ім'я"
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourname@domain.com"
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">Повідомлення</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Опишіть ваше питання..."
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-brand-green text-white font-bold rounded-xl shadow-lg shadow-brand-green/15 hover:bg-neutral-900 transition duration-300"
                >
                  Надіслати запит
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
