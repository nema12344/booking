import React, { useState } from 'react';

const FlightSearch: React.FC = () => {
    const [departure, setDeparture] = useState<string>('Singapore (SIN)');
    const [arrival, setArrival] = useState<string>('Los Angeles (LA)');
    const [date, setDate] = useState<string>('2022-01-05');
    const [tripType, setTripType] = useState<'return' | 'one-way'>('one-way');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ departure, arrival, date, tripType });
    };

    return (
        <div className="p-6 rounded-lg max-w-full mx-auto">
            <h2 className="text-xl font-semibold mb-4 text-white">SEARCH FLIGHTS</h2>
            <form onSubmit={handleSearch} className="bg-white p-4 rounded-lg shadow-md">

                {/* Trip Type Selection */}
                <div className="flex items-center justify-end mb-4">
                    <label className="flex items-center mr-8">
                        <input
                            type="radio"
                            name="tripType"
                            value="return"
                            checked={tripType === 'return'}
                            onChange={() => setTripType('return')}
                            className="mr-2"
                        />
                        Return
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="tripType"
                            value="one-way"
                            checked={tripType === 'one-way'}
                            onChange={() => setTripType('one-way')}
                            className="mr-2"
                        />
                        One-way
                    </label>
                </div>

                {/* Departure, Arrival, and Date Fields */}
                <div className="flex flex-wrap justify-between mb-4">
                    <div className="relative flex flex-col w-[30%]">
                        <label className="absolute text-xs text-black-100 left-3 top-0 transform -translate-y-1/2 bg-white px-1">Departure</label>
                        <input
                            type="text"
                            value={departure}
                            onChange={(e) => setDeparture(e.target.value)}
                            className="p-2 border rounded-lg w-full"
                        />
                    </div>
                    <div className="relative flex flex-col w-[30%]">
                        <label className="mb-1 absolute text-xs text-black-100 left-3 top-0 transform -translate-y-1/2 bg-white px-1">Arrival</label>
                        <input
                            type="text"
                            value={arrival}
                            onChange={(e) => setArrival(e.target.value)}
                            className="p-2 border rounded-lg w-full"
                        />
                    </div>
                    <div className="relative flex flex-col w-[30%]">
                        <label className="mb-1 absolute text-xs text-black-100 left-3 top-0 transform -translate-y-1/2 bg-white px-1">Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="p-2 border rounded-lg w-full"
                        />
                    </div>
                </div>

                {/* Search Button */}
                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                    SEARCH FLIGHTS
                </button>
            </form>
        </div>
    );
};

export default FlightSearch;
