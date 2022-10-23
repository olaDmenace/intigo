import React from 'react'
import Popup from '../Popup'


function CreateNewPassword() {
    return (
        <Popup>
            <h2 className='text-[#7700CF] text-3xl text-center font-bold'>Create New Password</h2>
            <h6 className='text-[#7700CF] text-lg text-center w-3/4 mx-auto'>Enter your new password.</h6>
            <fieldset className='grid w-4/5 mx-auto mt-5 gap-5'>
                <label htmlFor="">
                    <input className='w-full border border-[#7700CF] rounded-md h-10 px-2' placeholder='New Password' autoFocus type="password" name="" id="" />
                </label>
                <label htmlFor="">
                    <input className='w-full border border-[#7700CF] rounded-md h-10 px-2' placeholder='Confirm Password' autoFocus type="password" name="" id="" />
                </label>
                <button className='border rounded w-1/3 mx-auto cursor-pointer bg-[#7700CF] text-white h-9 transition ease-in-out delay-150 duration-300 hover:bg-[#8b14e3]' type="submit">Confirm</button>
            </fieldset>
        </Popup>
    )
}

export default CreateNewPassword