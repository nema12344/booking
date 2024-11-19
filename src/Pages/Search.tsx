import React from 'react'
import duration from '../Image/duration.png'
export default function Search() {
    return (
        <div>
            <div className="container mx-auto">
            <h2 className='text-bold text-2xl pb-2'>Recent Searches</h2>
            <div className="flex gap-5 text-customBlue text-lg p-2 ">
                <div className="md:w-1/2">
                    <div className="flex justify-between shadow-lg p-6 rounded-xl bg-gray-100 ">
                        <h2>SIN</h2>
                        <img src={duration} alt="" />
                        <h2>LAX</h2>
                    </div>
                </div>
                <div className="md:w-1/2">
                <div className="flex justify-between shadow-lg p-6 rounded-xl bg-gray-100">
                    <h2>MY</h2>
                    <img src={duration} alt="" />
                    <h2>DUB</h2>
                    </div>
                </div>
            </div>
            </div>
        </div >

    )
}
