import React from 'react';
import an from '../Image/Search.png';
import FlightSearch from '../Pages/FlightSearch.tsx'; // Import FlightSearch component
import hotel from '../Image/Hotel.png';
import Attractions from '../Image/Attractions.png';
import Eats from '../Image/Eats.png';
import Commute from '../Image/Commute.png';
import Taxi from '../Image/Taxi.png';
import Movies from '../Image/Movies.png';
import Search from './Search.tsx';

export default function Home() {
    return (
        <div>
            <div
                className="bg-cover bg-center w-[100] min-h-[100] flex flex-col items-center justify-start overflow-y-auto"
                style={{ backgroundImage: `url(${an})` }}
            >
                {/* Header Section */}
                <div className="text-center mt-24">
                    <h1 className="text-white text-7xl mb-3 mt-9">Let’s explore & travel the world</h1>
                    <p className="text-white text-lg mb-2">Explore beautiful destinations across the globe. Whether it's mountains, beaches, or cities, your next adventure awaits!</p>
                </div>

                {/* FlightSearch Component */}
                <div className="mt-12">
                    <FlightSearch />
                </div>

            </div>
            <Search/>
            <div className='p-6'>
                <div>
                    <h2 className="text-neutral-500 text-sm font-semibold">Prepare for your trip</h2>

                </div>
                <div className="flex justify-between gap-4 overflow-x-auto pb-4">
                    <div className='flex flex-col justify-center text-center'>
                        <img src={hotel} alt="" />
                        <h4>Hotel</h4>
                    </div>
                    <div className='flex flex-col justify-center text-center'><img src={Attractions} alt=""  />
                        <h4>Attractions</h4></div>
                    <div className='flex flex-col justify-center text-center'><img src={Eats} alt="" />
                        <h4>Eats</h4></div>
                    <div className='flex flex-col justify-center text-center'>        <img src={Commute} alt="" />
                        <h4>Commute</h4></div>
                    <div className='flex flex-col justify-center text-center'><img src={Taxi} alt=""/>
                        <h4>Taxi</h4></div>
                    <div className='flex flex-col justify-center text-center'><img src={Movies} alt="" />
                        <h4>Movies</h4></div>
                </div>
            </div>
        </div>
    );



}
