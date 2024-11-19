import React from 'react';
import duration from '../Image/duration.png';

export default function Search() {
    return (
        <div>
            <div className="container mx-auto p-4">
                <h2 className="font-bold text-2xl pb-4">Recent Searches</h2>
                <div className="flex flex-col gap-4 sm:flex-col md:flex-row text-customBlue text-lg">
                    {/* First Search Item */}
                    <div className="w-full md:w-1/2">
                        <div className="flex items-center justify-between shadow-lg p-4 rounded-xl bg-gray-100">
                            <h2>SIN</h2>
                            <img src={duration} alt="Duration" />
                            <h2>LAX</h2>
                        </div>
                    </div>

                    {/* Second Search Item */}
                    <div className="w-full md:w-1/2">
                        <div className="flex items-center justify-between shadow-lg p-4 rounded-xl bg-gray-100">
                            <h2>MY</h2>
                            <img src={duration} alt="Duration" />
                            <h2>DUB</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
