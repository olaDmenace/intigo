import React from 'react'

function CategoriesImage(props) {
    return (
        <div className='rounded bg-[#1A002D] w-full'>
            <img className='rounded-t w-full' src={props.image} alt="" />
            <div className='text-white px-4 py-4'>
                <h4 className='text-[#E2BAFF] text-lg font-bold'>{props.category}</h4>
                <p>Keychains</p>
                <p>Belts</p>
                <p>Music</p>
                <p>Work</p>
                <p className='text-[#DB74CA] font-semibold text-xs pt-2'>Shop all {props.category}</p>
            </div>
        </div>
    )
}

export default CategoriesImage