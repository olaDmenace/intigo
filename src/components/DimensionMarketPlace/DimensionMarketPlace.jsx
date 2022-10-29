import React from 'react'
import Header from '../Header'
import BreadCrumb from '../../Utils/BreadCrumb'
import Categories from '../../Utils/Categories'
import Filter from '../../Utils/Filter'
import CategoriesImage from '../../Utils/CategoriesImage'
import Accessories from '../../images/Accessories.png'
import Games from '../../images/Games.png'
import Art from '../../images/Art.png'
import Product from '../../Utils/Product'
import Hand from '../../images/Hand.png'
import Ring from '../../images/Ring.png'
import Shapes from '../../images/Shapes.png'
import Footer from '../Footer'



function DimensionMarketPlace() {
    return (
        <div>
            <div className='grid md:grid-cols-5 w-4/5 md:w-11/12 mx-auto py-5 gap-10 pt-48'>
                <div className='w-full'>
                    <Header />
                    <BreadCrumb />
                    <Categories />
                    <Filter />
                </div>
                <div className='w-full md:col-span-4'>
                    <div className='grid md:grid-cols-3 gap-7 md:grid-flow-col'>
                        <CategoriesImage image={Accessories} category={'Accessories'} />
                        <CategoriesImage image={Games} category={'Games'} />
                        <CategoriesImage image={Art} category={'Art'} />
                    </div>
                    <div className='pt-10 space-y-5'>
                        <h2 className='text-lg font-semibold'>3D Models</h2>
                        <div className='grid gap-7 md:grid-flow-col md:grid-cols-3'>
                            <Product image={Hand} title={'Robotic Hand'} artist={'John Doe'} price={'$140'} print={'40 Prints'} />
                            <Product image={Ring} title={'Golden Ring'} artist={'John Doe'} price={'$20'} print={'40 Prints'} />
                            <Product image={Shapes} title={'Golden Ring'} artist={'John Doe'} price={'$70'} print={'40 Prints'} />
                        </div>
                        <div className='grid gap-7 md:grid-flow-col md:grid-cols-3'>
                            <Product image={Hand} title={'Robotic Hand'} artist={'John Doe'} price={'$140'} print={'40 Prints'} />
                            <Product image={Ring} title={'Golden Ring'} artist={'John Doe'} price={'$20'} print={'40 Prints'} />
                            <Product image={Shapes} title={'Golden Ring'} artist={'John Doe'} price={'$70'} print={'40 Prints'} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DimensionMarketPlace