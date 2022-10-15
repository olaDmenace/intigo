import React from 'react'

function ImageBox(props) {
  return (
    <div className='space-y-5 flex-auto'>
        <img className='mx-auto h-16' src={props.img} alt="" />
        <h4 className='text-[#161414] text-center font-medium text-lg'>{props.heading}</h4>
    </div>
  )
}

export default ImageBox