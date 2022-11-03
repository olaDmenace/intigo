import React from 'react'
import Header from '../components/Header'
import Hand from '../images/Hand.png'

function AllProductPage() {
    return (
        <div>
            <Header />
            <div className='grid md:grid-cols-5 w-4/5 md:w-11/12 mx-auto py-5 gap-10 pt-48'>
                <div>
                    <img src={Hand} alt="" />
                </div>
                <div>
                    <h3>Hand of God</h3>
                </div>
            </div>
        </div>
    )
}

export default AllProductPage