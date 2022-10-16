import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../images/logo.png'


/**
 * 
 * This is the NavBar/Navigation Bar component for tabs and desktops.
 * 
*/

function NavBar() {
    return (
        <div className='hidden md:block px-14'>
            <div className="flex justify-between items-center relative py-16">
                <div>
                    <Link to={'/'}><img className='h-10' src={Logo} alt="" /></Link>
                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                </div>
                <div className="flex gap-5 font-bold text-lg">
                    <NavLink>NFT Marketplace</NavLink>
                    <NavLink>Marketplace</NavLink>
                    <NavLink>3D Creator</NavLink>
                    <NavLink>Contact Us</NavLink>
                </div>
            </div>
        </div>
    )
}

export default NavBar