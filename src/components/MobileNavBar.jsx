import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../images/logo.png'

/**
 * Navigation Bar for mobile devices
 */

function MobileNavBar() {

    const [menu, setMenu] = useState(false)
    const showMenu = (show) =>{
        setMenu(show=>!show)
    }

  return (
    <div className='md:hidden relative px-10'>
        <div className="flex justify-between items-center relative pt-16">
            <div>
                <img className='h-10' src={Logo} alt="" />
            </div>
        <Bars4Icon onClick={showMenu} className='h-8 cursor-pointer' />
        </div>
        {menu&&<div className='absolute space-y-16 h-screen w-3/4 top-0 right-0 bg-[#7700CF] z-10 pt-16 px-10'>
            <XMarkIcon onClick={showMenu} className='h-8 cursor-pointer float-right' />
            <div className="grid justify-end gap-5 font-bold text-lg text-right">
                <NavLink>NFT Marketplace</NavLink>
                <NavLink>Marketplace</NavLink>
                <NavLink>3D Creator</NavLink>
                <NavLink>Contact Us</NavLink>
            </div>
        </div>}
    </div>
  )
}

export default MobileNavBar