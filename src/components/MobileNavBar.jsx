import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../images/logo.png'
import { motion } from "framer-motion"
import Login from './membership/Login'
import SignUp from './membership/SignUp'


/**
 * Navigation Bar for mobile devices
 */

function MobileNavBar() {

    const [menu, setMenu] = useState(false)
    const showMenu = (show) => {
        setMenu(show => !show)
    }

    const [signup, setSignUp] = useState(false)
    const [login, setLogin] = useState(false)

    const showLogin = () => {
        setLogin(!login)
    }


    const showSignUp = () => {
        setSignUp(!signup)
    }

    return (
        <div>
            <div className='md:hidden relative px-10'>
                <div className="flex justify-between items-center relative pt-16">
                    <Link to={'/'}>
                        <img className='h-10' src={Logo} alt="" />
                    </Link>
                    <Bars4Icon onClick={showMenu} className='h-8 cursor-pointer' />
                </div>
                {menu && <motion.div
                    initial={{ opacity: 0, x: '5vw' }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.09, duration: 1 }}
                    className='absolute space-y-16 min-h-screen w-3/4 top-0 right-0 bg-[#7700CF] z-10 pt-16 px-10'>
                    <XMarkIcon onClick={showMenu} className='h-8 cursor-pointer float-right' />
                    <div className="grid justify-end gap-5 font-bold text-lg text-right">
                        <NavLink>NFT Marketplace</NavLink>
                        <NavLink to={'/marketplace'}>Marketplace</NavLink>
                        <NavLink>3D Creator</NavLink>
                        <NavLink>Contact Us</NavLink>
                        <NavLink onClick={showLogin}>Log In</NavLink>
                        <NavLink onClick={showSignUp}>Sign Up</NavLink>
                    </div>
                </motion.div>}
            </div>
            {login && <Login />}
            {signup && <SignUp />}
        </div>
    )
}

export default MobileNavBar