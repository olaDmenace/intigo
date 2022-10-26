import React from 'react'
import Header from '../Header'
import BreadCrumb from '../../Utils/BreadCrumb'
import Categories from '../../Utils/Categories'
import Filter from '../../Utils/Filter'

function DimensionMarketPlace() {
    return (
        <div className='grid'>
            <div className='w-2/3 mx-auto py-5'>
                <Header />
                <BreadCrumb />
                <Categories />
                <Filter />
            </div>
        </div>
    )
}

export default DimensionMarketPlace