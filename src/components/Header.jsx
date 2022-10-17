import React from 'react'
import BG from '../images/headerImage.png'
import MobileNavBar from './MobileNavBar'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div className='fixed top-0 left-0 right-0 w-full'>
        <div className='relative'>
            <div className='bg-[#1A002D] bg-cover w-full h-32 relative text-white'>
                <img className='w-full mix-blend-multiply h-28 absolute' src={BG} alt="" />
                <div>
                    <NavBar />
                    <MobileNavBar />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header