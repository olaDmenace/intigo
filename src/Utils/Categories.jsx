import { React, useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import CategoriesImage from './CategoriesImage'


function Categories() {
    const [categories, setCatgeries] = useState([
        { title: 'Accessories', id: 1 },
        { title: 'Art', id: 2 },
        { title: 'Games', id: 3 },
        { title: 'Jewellery', id: 4 },
        { title: 'For Your Home', id: 5 },
        { title: 'Miniatures', id: 6 },
        { title: 'Tech', id: 7 },
        { title: 'Other', id: 8 }
    ])
    return (
        <div className='space-y-2'>
            <h4 className='text-lg font-semibold text-[#7700CF]'>Categories</h4>
            {categories.map((categories) => (
                <div key={categories.id}>
                    <span className='flex gap-1 items-center'><ChevronRightIcon className='h-6' /><h5>{categories.title}</h5></span>
                </div>
            ))}
        </div>
    )
}

export default Categories