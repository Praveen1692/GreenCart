import React from 'react'
import { assets } from '../assets/assets'

function MainBanner() {
  return (
    <div className='relative'>
        <img src={assets.main_banner_bg} alt="main-banner" className='w-full hidden md:block'  />
        <img src={assets.main_banner_bg_sm} alt="main-banner" className='w-full md:hidden' />
        <div className=''>
            <h1 className=''>
                
            </h1>

        </div>
    </div>
  )
}

export default MainBanner