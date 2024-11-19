import React from 'react';
import first from '../Image/first.png';
import secound from '../Image/secound.png';
import third from '../Image/third.png';
import fourth from '../Image/fourth.png';

// Define the type for each stay item
type Stay = {
  name: string;
  price: string;
  type: string;
  reviews: number;
  rating: number;
  image: string;
};

// Sample data for popular stays
const stays: Stay[] = [
  { name: 'Matterhorn Suites', price: '$575/night', type: 'Entire bungalow', reviews: 60, rating: 4.9, image: first },
  { name: 'Discovery Shores', price: '$360/night', type: '2-Story beachfront suite', reviews: 116, rating: 4.8, image: secound },
  { name: 'Arctic Hut', price: '$420/night', type: 'Single deluxe hut', reviews: 78, rating: 4.7,  image: third },
  { name: 'Lake Louise Inn', price: '$244/night', type: 'Deluxe King Room', reviews: 63, rating: 4.6,  image: fourth },
];

const PopularStays: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Popular Stays</h2>
        <a href="/all-stays" className="text-blue-600 text-sm hover:underline">
          View all stays →
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {stays.map((stay, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${stay.image})` }}
            ></div>
            <div className="p-4">
              <p className="text-gray-500 text-sm">{stay.type}</p>
              <h3 className="font-semibold text-lg">{stay.name}</h3>
              <p className="text-gray-800">{stay.price}</p>
              <div className="flex items-center mt-2 text-yellow-500">
                <span className="mr-1">★</span>
                <span className="font-semibold">{stay.rating}</span>
                <span className="text-gray-600 ml-2">({stay.reviews} reviews)</span>
              </div>
              <button className="mt-4 w-full text-blue-600 border border-blue-600 rounded-lg py-2 text-sm font-semibold hover:bg-blue-50">
                MORE DETAILS
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularStays;
