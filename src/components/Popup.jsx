import { XCircleIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'

function Popup(props) {
    const [isOpen, setIsOpen] = useState(true)

    const togglePop = () =>{
        setIsOpen(!isOpen)
    }
  return (
    <div>
        {isOpen&&<div className='fixed w-full z-20 top-0'>
            <div className='h-screen absolute top-0 w-full bg-black bg-opacity-60 grid place-items-center'>
                <div className='bg-white min-h-4/6 w-3/4 lg:w-1/2 rounded py-12 relative'>
                    <XCircleIcon onClick={togglePop} className='h-8 float-right absolute top-5 right-5 cursor-pointer text-[#7700CF]' />
                    {props.children}
                </div>
            </div>
        </div>}
    </div>
  )
}

export default Popup