import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-emerald-700 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-lg font-bold">АгроПро</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/">Головна</Link></li>
              <li><Link to="/products">Продукти</Link></li>
              <li><Link to="/about">Про нас</Link></li>
              <li><Link to="/news">Новини</Link></li>
              <li><Link to="/contacts">Контакти</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-emerald-700 text-white p-4 text-center">
        <p>&copy; 2024 АгроПро. Всі права захищені.</p>
      </footer>
    </div>
  );
};

export default Layout;
