import React from 'react'
import gb from '../Image/Subscribe.png';

export default function From() {
  return (
    <div>
      <div className="bg-cover bg-center w-[100] min-h-[100vh] flex flex-col items-center justify-start justify-contant-center overflow-y-auto"
        style={{ backgroundImage: `url(${gb})` }}>
        <h2 className='text-customBlue text-2xl text-bold'>Subscribe To Our Newsletter</h2>
        <h3>Get weekly updates</h3>
        <div>
          <p>Fill in your details to join the party!</p>
          <input type="text" placeholder='Your Name' className='border' />
          <input type="text" placeholder='Email address' className='border' />
          
        </div>
      </div>
    </div>
  )
}
