import { HeartIcon, MinusIcon, PlusIcon, ShareIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hand from '../images/Hand.png'


function ProductPage() {
    return (
        <div className='grid'>
            <Header />
            <div className='pt-48 mx-auto w-4/5 md:w-11/12 space-y-10'>
                <div className='grid gap-10 md:grid-cols-5'>
                    <div className='md:col-span-3'>
                        <img className='w-full rounded shadow-md' src={Hand} alt="" />
                    </div>
                    <div className='space-y-5 md:col-span-2'>
                        <div className='space-y-3'>
                            <h3 className='text-[#1A002D] font-semibold text-lg'>Hand of God</h3>
                            <p className='text-[#7700CF] text-sm'>Made by <span className='text-[#1A002D] text-base'>Tivieni</span></p>
                        </div>
                        <div className='space-y-3'>
                            <p className='text-2xl'>$70.00</p>
                            <div>
                                <p className='text-[#7700CF]'>Material</p>
                                <label htmlFor="">
                                    <select className='w-full rounded bg-gray-100 px-2 py-3' name="" id="">
                                        <option selected value="">Black Natural Versatile Steel</option>
                                    </select>
                                </label>
                            </div>
                            <p>3D printed in blue nylon plastic with a matte finish and slight grainy feel.
                            </p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-4'>
                                <p>QTY</p>
                                <MinusIcon className='h-6 bg-gray-100 rounded-full p-1' />
                                <p>1</p>
                                <PlusIcon className='h-6 bg-gray-100 rounded-full p-1' />
                            </div>
                            <button className='bg-[#7700CF] py-2 px-6 rounded-sm transition ease-in-out delay-150 duration-300 text-white hover:bg-[#8b14e3]'>Add to cart</button>
                        </div>
                        <div className='space-y-2'>
                            <p>Have a question about the product?</p>
                            <p className='text-[#7700CF] font-medium text-xs'>CONTACT THE DESIGNER</p>
                        </div>
                    </div>
                </div>
                <div className='grid gap-10 md:grid-cols-5'>
                    <div className='md:col-span-3'>
                        <div className='space-y-3'>
                            <h3 className='text-[#7700CF]'>PRODUCT DESCRIPTION</h3>
                            <p>This is a set of DIY rod ends for making your own custom links for the Axial SCX24. The set includes 24 rod ends. The rod ends are designed to use 2-56 threaded rod and can be used with either 1/8" or 5/32" tubing depending on your preference. Be sure to pick tubing that will fit over the 2-56 threaded rod. You will also need to reuse the factory pivot balls. Note: 2-56 threaded rod and tubing must be purchased by the user.
                            </p>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div className='space-y-3'>
                            <h3 className='text-[#7700CF]'>DETAILS</h3>
                            <div className='space-y-1'>
                                <h6>Dimensions:</h6>
                                <p>3.12 x 0.56 x 6.39 cm</p>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className='flex w-12 p-1 gap-1 items-center rounded-full bg-gray-100'>
                                <HeartIcon className='h-4 text-[#7700CF] stroke-2' />
                                <p>39</p>
                            </div>
                            <div className='flex w-20 p-1 gap-1 items-center rounded-full bg-gray-100'>
                                <ShareIcon className='h-4 text-[#7700CF] stroke-2' />
                                <p>Share</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-auto w-4/5 md:w-11/12 my-10'>
                <h6 className='text-[#7700CF]'>TAGS</h6>
                <div className='flex gap-2'>
                    <p className='text-white bg-gray-400 px-2 py-1 rounded-lg'>Axial</p>
                    <p className='text-white bg-gray-400 px-2 py-1 rounded-lg'>Crawler</p>
                    <p className='text-white bg-gray-400 px-2 py-1 rounded-lg'>Rod Ends</p>
                    <p className='text-white bg-gray-400 px-2 py-1 rounded-lg'>SCX24</p>
                    <p className='text-white bg-gray-400 px-2 py-1 rounded-lg'>1:24</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductPage