import React from 'react'
import Popup from '../Popup'


function ForgotPassword() {
    return (
        <Popup>
            <h2 className='text-[#7700CF] text-3xl text-center font-bold'>Forgot Password</h2>
            <h6 className='text-[#7700CF] text-lg text-center w-3/4 mx-auto'>Enter your email address to receive verification code.</h6>
            <fieldset className='grid w-4/5 mx-auto mt-5 gap-10'>
                <label htmlFor="">
                    <input className='w-full border border-[#7700CF] rounded-md h-10 px-2' placeholder='Email Address' autoFocus type="email" name="" id="" />
                </label>
                <button className='border rounded w-1/3 mx-auto cursor-pointer bg-[#7700CF] text-white h-9 transition ease-in-out delay-150 duration-300 hover:bg-[#8b14e3]' type="submit">Send Link</button>
            </fieldset>
        </Popup>
    )
}

export default ForgotPassword