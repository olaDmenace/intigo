import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Marketplace() {
  return (
    <div>
        <Header />
        <div className='bg-[#FFF1FE] px-10 md:px-14 pt-48 pb-20 space-y-10 grid justify-center'>
            <h4 className='font-semibold text-2xl'>Morph Brand Dashboard</h4>
            <form className='grid gap-5'>
                <label className='space-y-2'>
                    <p className=''>Brand/Creator Name</p>
                    <input className='w-full rounded h-10 border p-1' type="text" name="" id="" />
                </label>
                <label className='space-y-2'>
                    <p className=''>Product Type</p>
                    <input className='w-full rounded h-10 border p-1' type="text" name="" id="" />
                </label>
                <label className='space-y-2'>
                    <p className=''>What/who is the product targeted for?</p>
                    <input className='w-full rounded h-10 border p-1' type="text" name="" id="" />
                </label>
                <label className='space-y-2'>
                    <p className=''>Do you have existing 3D files & Do you need a 3D artist?</p>
                    <input className='w-full rounded h-10 border p-1' type="text" name="" id="" />
                </label>
                <label className='space-y-2'>
                    <p className=''>Are you looking to purchase in short runs & Ship or do you need Intigo to ship to the end customer?</p>
                    <input className='w-full rounded h-10 border p-1' type="text" name="" id="" />
                </label>
                <input className='border rounded w-1/3 justify-self-end cursor-pointer bg-[#7700CF] text-white h-9 transition ease-in-out delay-150 duration-300 hover:bg-[#8b14e3]' type="button" value="Submit" />
            </form>
        </div>
        <Footer />
    </div>
  )
}

export default Marketplace