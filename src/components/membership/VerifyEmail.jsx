import React from 'react'
import Popup from '../Popup'
import Mail from '../../images/Mail.png'

function VerifyEmail() {
    return (
        <Popup>
            <h2 className='text-[#7700CF] text-3xl text-center font-bold'>Verify Your Email</h2>
            <h6 className='text-[#7700CF] text-lg text-center'>Set Up Your Account</h6>
            <img className='mx-auto py-5' src={Mail} alt="" />
            <p className='text-[#7700CF] w-4/5 mx-auto text-center'>A verification email has been sent to you. Please click on the link in the email to proceed to your account</p>
            <button className='rounded bg-[#7700CF] mx-auto mt-5 py-2 px-6 gap-2 flex items-center transition ease-in-out delay-150 duration-300 text-white hover:bg-[#8b14e3]'>Resend Email</button>
        </Popup>
    )
}

export default VerifyEmail