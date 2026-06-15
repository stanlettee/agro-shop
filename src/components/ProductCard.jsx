import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, name, category, shortDescription, image } = product;

  return (
    <div className="group bg-white border border-neutral-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col h-full transform hover:-translate-y-1">
      <div className="relative aspect-video bg-neutral-100 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute top-4 left-4">
          <span className="bg-brand-green/90 text-white font-semibold text-xs px-3 py-1.5 rounded-lg backdrop-blur-sm shadow-sm">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-neutral-900 group-hover:text-brand-green transition duration-300 mb-2 leading-snug">
            {name}
          </h3>
          <p className="text-neutral-500 text-sm leading-relaxed mb-4">
            {shortDescription}
          </p>
        </div>
        <span className="inline-flex items-center text-brand-green font-semibold text-sm group-hover:text-brand-lime transition duration-300">
          Детальніше <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform">→</span>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
