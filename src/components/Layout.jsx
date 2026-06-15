import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <button
        className="block md:hidden p-2 bg-emerald-700 text-white rounded hover:bg-emerald-500 transition duration-300"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? 'Close' : 'Menu'}
      </button>
      <nav className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col space-y-4">
          <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Головна</Link></li>
          <li><Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>Продукти</Link></li>
          <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>Про нас</Link></li>
          <li><Link to="/news" onClick={() => setIsMobileMenuOpen(false)}>Новини</Link></li>
          <li><Link to="/contacts" onClick={() => setIsMobileMenuOpen(false)}>Контакти</Link></li>
        </ul>
      </nav>
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
