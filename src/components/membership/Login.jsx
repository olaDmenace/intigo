import React from 'react'
import { Link } from 'react-router-dom'
import Popup from '../Popup'


function Login() {
  return (
    <Popup>
        <h2 className='text-[#7700CF] text-3xl text-center font-bold'>Welcome Back.</h2>
        <form className='grid gap-5 mx-auto w-4/5 py-12' action="">
            <label htmlFor="">
                <input className='w-full border border-[#7700CF] rounded-md h-10 px-2' placeholder='user@example.com' autoFocus type="email" name="" id="" />
            </label>
            <label htmlFor="">
                <input className='w-full border border-[#7700CF] rounded-md h-10 px-2' placeholder='Password' type="password" name="" id="" />
            </label>
            <fieldset className='text-[#7700CF] flex justify-around'>
                <label htmlFor="">
                    <input
                        type="checkbox"
                        className='mr-1'
                    />
                    Remember Me
                </label>
                <p>Forgot Password</p>
            </fieldset>
            <button className='border rounded w-1/3 mx-auto cursor-pointer bg-[#7700CF] text-white h-9 transition ease-in-out delay-150 duration-300 hover:bg-[#8b14e3]' type="submit">Log In</button>
        </form>
        <p className='w-2/3 text-center mx-auto text-[#7700CF]'>Do not have an account yet? <Link className='font-bold'>Create Account</Link></p>
    </Popup>
  )
}

export default Login