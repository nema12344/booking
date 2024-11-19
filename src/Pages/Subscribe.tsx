import React from 'react';
import gb from '../Image/Subscribe.png';

export default function Form() {
  return (
    <div className="bg-no-repeat m-0 bg-center min-h-[100vh] flex items-center justify-center overflow-y-auto p-0"
      style={{ backgroundImage: `url(${gb})` }}>
      <div className=''>
        <h2 className='text-customBlue text-2xl font-bold'>Subscribe To Our Newsletter</h2>
        <h3 className='mb-4 text-center text-2xl text-bold'>Get weekly updates</h3>
        <div className='bg-white p-10 rounded shadow-md w-full max-w-lg'>
          <p className='p-3'>Fill in your details to join the party!</p>
          <div className='flex flex-col gap-5'>
            <input type="text" placeholder='Your Name' className='border p-2 rounded' />
            <input type="email" placeholder='Email address' className='border p-2 rounded' />
          </div>
          <button className='bg-red-600 text-white p-2 m-2 rounded'>Submit</button>
        </div>
      </div>
    </div>
  );
}