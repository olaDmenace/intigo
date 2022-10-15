import React from 'react'
import {ArrowRightIcon} from '@heroicons/react/24/outline'

/**
 * This component is the button component
 */

function Button(props) {
  return (
    <button className="btn bg-[#7700CF] py-2 px-6 rounded-sm gap-2 flex items-center transition ease-in-out delay-150 duration-300 text-white hover:bg-[#8b14e3]">
        {props.text}
        <ArrowRightIcon className='h-4' />
    </button>
  )
}

export default Button