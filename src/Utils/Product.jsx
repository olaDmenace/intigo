import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import React from 'react'

function Product(props) {
    return (
        <div className='rounded bg-[#1A002D]'>
            <img className='rounded-t w-full' src={props.image} alt="" />
            <div className='text-[#E2BAFF] px-4 py-4 flex justify-between'>
                <div>
                    <h2 className='font-semibold'>{props.title}</h2>
                    <p>by {props.artist}</p>
                    <button className='rounded-full border border-white text-sm px-3 py-1 mt-3'>View NFT</button>
                </div>
                <div className='grid justify-items-end gap-2'>
                    <p>{props.price}</p>
                    <ShoppingCartIcon className='w-6 text-white' />
                    <p>{props.print}</p>
                </div>
            </div>
        </div>
    )
}

export default Product