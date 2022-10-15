import React from 'react'

function IconBox(props) {
  return (
    <div className='px-10 md:px-14 space-y-2 text-center text-[#1A002D]'>
        <img className='mx-auto h-12' src={props.img} alt="" />
        <h4 className='font-semibold text-xl'>{props.header}</h4>
        <p>{props.text}</p>
    </div>
  )
}

export default IconBox