import { React, useState } from 'react'
import Popup from '../Popup'
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'


function Login() {

    // Controls the state for the signup popup on the login UI
    const [sign, setSign] = useState(false)

    const showSignUp = () => {
        setSign(!sign)
    }

    // Controls the ForgotPassword State on the Login UI
    const [forgot, setForgot] = useState(false)

    const showPassword = () => {
        setForgot(!forgot)
    }

    return (
        <div>
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
                        <p className='cursor-pointer' onClick={showPassword}>Forgot Password</p>
                    </fieldset>
                    <button className='border rounded w-1/3 mx-auto cursor-pointer bg-[#7700CF] text-white h-9 transition ease-in-out delay-150 duration-300 hover:bg-[#8b14e3]' type="submit">Log In</button>
                </form>
                <p className='w-2/3 text-center mx-auto text-[#7700CF]'>Do not have an account yet? <span onClick={showSignUp} className='font-bold cursor-pointer'>Create Account</span></p>
            </Popup>
            {sign && <SignUp />}
            {forgot && <ForgotPassword />}
        </div>
    )
}

export default Login