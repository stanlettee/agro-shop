import React from 'react';
import { Link } from 'react-router-dom';

const News = () => {
  return (
    <Layout>
      <section className="container mx-auto py-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 border-b-2 border-emerald-500">Новини та події</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* News items will go here */}
        </ul>
      </section>
    </Layout>
  );
};

export default News;
