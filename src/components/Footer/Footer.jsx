import React from 'react'
import imgSrc from '../../assets/logo-BfNap0Pe.png'


export default function Footer() {
  return (
    <div className='bg-white'>
      <div className='container z-50'>
        <div className='flex flex-col sm:flex-row justify-between pb-4 text-2xl font-bold'>
          <div className='flex items-center gap-2'>
            <img src={imgSrc} alt='logo food image' className='w-12'/>
            Recipe
          </div>
          <span className='text-blue-600'>Route</span>
        </div>
        <hr/>
        <p className='sm:text-center text-gray-400 py-4'>© 2025 Mahmoud Mansy™. All Rights Reserved.</p>
      </div>
    </div>
  )
}
