import React from 'react'
import { assets } from '../assets/assets'

function Categories() {
  return (
    <div className='mt-16'>
        <p className='text-2xl md:text-3xl font-medium'>Catgegories</p>
        <div className='grid grid-cols sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6'>
            <div className=''>
                <img src={assets.box_icon} alt="categories" />
                <p>Fruits</p>
            </div>
        </div>

    </div>
  )
}

export default Categories