import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/agro-shop/', label: 'Головна' },
    { path: '/agro-shop/products', label: 'Продукти' },
    { path: '/agro-shop/about', label: 'Про нас' },
    { path: '/agro-shop/news', label: 'Новини' },
    { path: '/agro-shop/contacts', label: 'Контакти' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-light text-brand-dark selection:bg-brand-lime selection:text-brand-green">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-neutral-900/90 backdrop-blur-md shadow-lg border-b border-neutral-800/50 py-3' 
          : 'bg-neutral-950/80 backdrop-blur-sm border-b border-white/5 py-5'
      }`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-black tracking-wider text-white">
            <span className="text-brand-lime">АГРО</span><span>ПРО</span>
            <span className="inline-block w-2 h-2 rounded-full bg-brand-lime"></span>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex space-x-8 text-sm font-medium tracking-wide">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.path}>
                    <Link 
                      to={link.path} 
                      className={`relative py-2 text-white/90 hover:text-white transition duration-300 group`}
                    >
                      {link.label}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-lime transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 bg-neutral-950/95 backdrop-blur-md transform transition-transform duration-500 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full justify-center px-8 py-16">
          <ul className="flex flex-col space-y-6 text-2xl font-semibold text-white">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className="hover:text-brand-lime transition duration-300 block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="h-16 md:h-20 bg-neutral-950"></div>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link to="/" className="text-2xl font-black tracking-wider text-white flex items-center space-x-2 mb-4">
                <span className="text-brand-lime">АГРО</span><span>ПРО</span>
                <span className="inline-block w-2 h-2 rounded-full bg-brand-lime"></span>
              </Link>
              <p className="text-sm max-w-sm leading-relaxed text-neutral-400">
                Лідер у постачанні високоякісного насіння, засобів захисту рослин та передових цифрових рішень для сучасного аграрія.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold tracking-wider uppercase text-xs mb-4 border-l-2 border-brand-lime pl-2">Навігація</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/agro-shop/" className="hover:text-white transition duration-300">Головна</Link></li>
                <li><Link to="/agro-shop/products" className="hover:text-white transition duration-300">Продукти</Link></li>
                <li><Link to="/agro-shop/about" className="hover:text-white transition duration-300">Про нас</Link></li>
                <li><Link to="/agro-shop/news" className="hover:text-white transition duration-300">Новини</Link></li>
                <li><Link to="/agro-shop/contacts" className="hover:text-white transition duration-300">Контакти</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold tracking-wider uppercase text-xs mb-4 border-l-2 border-brand-lime pl-2">Зв'язок</h4>
              <p className="text-sm text-neutral-400 mb-2">м. Київ, вул. Агрономічна, 15</p>
              <p className="text-sm text-neutral-400 mb-2">+380 44 123 45 67</p>
              <p className="text-sm text-neutral-400">info@agropro.ua</p>
            </div>
          </div>
          <div className="border-t border-neutral-900 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
            <p>&copy; {new Date().getFullYear()} АгроПро. Всі права захищені.</p>
            <p className="mt-2 md:mt-0">Створено з турботою про українські поля</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
