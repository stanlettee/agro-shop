import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, name, category, shortDescription, image } = product;

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition">
      <Link to={`/products/${id}`}>
        <img src={image} alt={name} className="w-full h-48 object-cover bg-gray-200" />
        <h3 className="text-xl font-bold mt-4">{name}</h3>
        <span className="bg-emerald-700 text-white px-2 py-1 rounded-lg text-sm mb-2">{category}</span>
        <p>{shortDescription}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
