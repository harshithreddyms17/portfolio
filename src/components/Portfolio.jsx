import React from 'react';
import code1 from '../assets/pexels-bri-schneiter-28802-346529.jpg';

const Portfolio = () => {
  const portfolios = [
    { id: 1, src: code1 },
    { id: 2, src: code1 },
    { id: 3, src: code1 },
    { id: 4, src: code1 },
    { id: 5, src: code1 },
    { id: 6, src: code1 },
  ];

  return (
    <section
      id="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8 pb-2 border-b-4 border-gray-500 inline-block">
          Portfolio
        </h2>
        <p className="text-gray-300 mb-12">Check my work right here</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 duration-300">
              <img
                src={src}
                alt={`Portfolio item ${id}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <button className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white py-3 rounded-md font-semibold hover:from-pink-600 hover:to-orange-600 transition duration-300">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;