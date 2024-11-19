import React from 'react';
import first from '../Image/first.png';
import secound from '../Image/secound.png';
import third from '../Image/third.png';
import fourth from '../Image/fourth.png';

// Define a type for the destination data
type Nema = {
  name: string;
  duration: string; // Add duration to match the design
  price: string;
  image: string;
};

// Define an array of destinations with the appropriate types
const destinations: Nema[] = [
  { name: 'Bali', duration: '4D3N', price: '$899', image: first },
  { name: 'Greece', duration: '5D4N', price: '$1079', image: secound },
  { name: 'Norway', duration: '6D5N', price: '$895', image: third },
  { name: 'Tuscany', duration: '3D2N', price: '$1245', image: fourth },
];

const Holidays: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <p className="text-2xl font-bold">Recommended Holidays</p>
        <a href="/all-destinations" className="text-blue-600 text-sm hover:underline">
          View all holidays →
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">{destination.name}</h3>
                <p className="text-blue-600 font-bold text-lg">{destination.price}</p>
              </div>
              <p className="text-gray-500 mt-1">{destination.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Holidays;
