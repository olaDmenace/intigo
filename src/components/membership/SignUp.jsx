import React from 'react'
import { Link } from 'react-router-dom'
import Popup from '../Popup'

function SignUp() {
  return (
    <Popup>
        <h2 className='text-[#7700CF] text-3xl text-center font-bold'>Welcome</h2>
        <h6 className='text-[#7700CF] text-lg text-center'>Set Up Your Account</h6>
        <form className='grid gap-3 mx-auto w-4/5 py-10' action="">
            <fieldset className='grid gap-3 mx-auto w-full'>
                <label htmlFor="">
                    <input className='w-full border border-[#7700CF] rounded-md h-10 px-2' placeholder='First Name' type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    <input className='w-full border border-[#7700CF] rounded-md h-10 px-2' placeholder='Last Name' type="text" name="" id="" />
                </label>
            </fieldset>
            <label htmlFor="">
                <input className='w-full border border-[#7700CF] rounded-md h-10 px-2' placeholder='Email Address' autoFocus type="email" name="" id="" />
            </label>
            <label htmlFor="">
                <input className='w-full border border-[#7700CF] rounded-md h-10 px-2' placeholder='Username' autoFocus type="email" name="" id="" />
            </label>
            <label htmlFor="">
                <input className='w-full border border-[#7700CF] rounded-md h-10 px-2' placeholder='Password' type="password" name="" id="" />
            </label>
            <fieldset className='text-[#7700CF] flex'>
                <label htmlFor="">
                    <input
                        type="checkbox"
                        className='mr-1'
                    />
                    I agree to <Link className='font-bold'>Terms and Conditions</Link>
                </label>
            </fieldset>
            <button className='border rounded w-1/3 mx-auto cursor-pointer bg-[#7700CF] text-white h-9 transition ease-in-out delay-150 duration-300 hover:bg-[#8b14e3]' type="submit">Log In</button>
        </form>
        <p className='w-2/3 text-center mx-auto text-[#7700CF]'>Already have an account?<br/><Link className='font-bold'>Sign In</Link></p>
    </Popup>
  )
}

export default SignUp