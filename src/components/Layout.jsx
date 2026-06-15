import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-emerald-700 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-lg font-bold">AgroPro</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/contacts">Contacts</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-emerald-700 text-white p-4 text-center">
        <p>&copy; 2023 AgroPro. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
