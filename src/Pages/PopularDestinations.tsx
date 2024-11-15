import React from 'react';
import Paris from '../Image/ParisCard.png';
import Greece from '../Image/GreeceCard.png';
import Norway from '../Image/NorwayImage.png';
import Tuscany from '../Image/TuscanyCard.png';

// Define a type for the destination data
type Destination = {
  name: string;
  price: string;
  image: string;
};

// Define an array of destinations with the appropriate types
const destinations: Destination[] = [
  { name: 'Paris', price: '$699', image: Paris },
  { name: 'Greece', price: '$1079', image: Greece },
  { name: 'Norway', price: '$895', image: Norway },
  { name: 'Tuscany', price: '$1245', image: Tuscany },
];

const PopularDestinations: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-blue-600 text-sm font-semibold">PLAN YOUR NEXT TRIP</h2>
          <p className="text-2xl font-bold">Most Popular Destinations</p>
        </div>
        <a href="/all-destinations" className="text-blue-600 text-sm hover:underline">
          View all destinations →
        </a>
      </div>
      <div className="flex justify-between gap-4 overflow-x-auto pb-4">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="relative w-48 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${destination.image})` }}
          >
            <div className="absolute top-0 bg-black bg-opacity-50 text-white p-2 w-full flex justify-between items-center">
              <span className="font-semibold text-lg">{destination.name}</span>
              <span className="font-bold text-lg">FROM {destination.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;
