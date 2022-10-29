import { React, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../images/logo.png'
import Login from './membership/Login'
import SignUp from './membership/SignUp'


/**
 * 
 * This is the NavBar/Navigation Bar component for tabs and desktops.
 * 
*/

function NavBar() {
    const [signup, setSignUp] = useState(false)
    const [login, setLogin] = useState(false)

    const showLogin = () => {
        setLogin(!login)
    }


    const showSignUp = () => {
        setSignUp(!signup)
    }

    return (
        < div className='hidden md:block relative' >
            <div className="flex justify-between items-center relative py-16 px-14">
                <div>
                    <Link to={'/'}><img className='h-10' src={Logo} alt="" /></Link>
                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                </div>
                <div className="flex gap-5 font-bold text-lg">
                    <NavLink>NFT Marketplace</NavLink>
                    <NavLink to={'/dimensionMarketarketPlace'}>Marketplace</NavLink>
                    <NavLink>3D Creator</NavLink>
                    <NavLink>Contact Us</NavLink>
                </div>
                <div className='flex gap-5'>
                    <button onClick={showLogin} className='bg-[#7700CF] py-2 px-6 rounded transition ease-in-out delay-150 duration-300 text-white hover:bg-[#8b14e3]'>Log In</button>
                    <button onClick={showSignUp} className='py-2 px-6 border border-[#7700CF] rounded transition ease-in-out delay-150 duration-300 text-white hover:bg-[#8b14e3]'>Sign Up</button>
                </div>
            </div>
            {login && <Login />}
            {signup && <SignUp />}
        </div >
    )
}

export default NavBar