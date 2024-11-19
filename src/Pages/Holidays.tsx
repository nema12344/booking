import React from 'react';
import first from '../Image/first.png';
import secound from '../Image/secound.png';
import third from '../Image/third.png';
import fourth from '../Image/fourth.png';

// Define a type for the destination data
type Nema = {
  name: string;
  price: string;
  image: string;
};

// Define an array of destinations with the appropriate types
const Nema: Nema[] = [
  { name: 'first', price: '$699', image: first },
  { name: 'Greece', price: '$1079', image: secound },
  { name: 'Norway', price: '$895', image: third },
  { name: 'Tuscany', price: '$1245', image: fourth },
];

const Holidays: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-2xl font-bold">Recommended Holidays</p>
        </div>
        <a href="/all-destinations" className="text-blue-600 text-sm hover:underline">
        View all holidays →
        </a>
      </div>
      <div className="flex justify-between gap-4 overflow-x-auto pb-4">
        {Nema.map((Nema, index) => (
          <div
            key={index}
            className="w-48 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-cover bg-center relative"
            style={{ backgroundImage: `url(${Nema.image})` }}
          >
            <div className="absolute bottom-0 bg-black bg-opacity-0 text-white p-2 w-full flex justify-between items-center">
              <span className="font-semibold text-lg">{Nema.name}</span>
              <span className="font-bold text-lg">FROM {Nema.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Holidays;
