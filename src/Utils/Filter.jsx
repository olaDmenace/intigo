import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { React, useState } from 'react'

function Filter() {

    const [filter, setFilter] = useState([
        { title: 'Formats', id: 1 },
        { title: 'Poly Counts', id: 2 },
        { title: 'Rating', id: 3 }
    ])

    const [filter2, setFilter2] = useState([
        { title: 'Private', id: 1 },
        { title: 'PBR', id: 2 },
        { title: 'Animated', id: 3 }
    ])
    return (
        <div className='space-y-8'>
            <div>
                <input id="steps-range" type="range" min="0" max="1000" value="300" step="0.5" class="w-full h-2 bg-[#7700CF] rounded-lg appearance-none cursor-pointer"></input>
            </div>
            <div className=''>
                {filter.map((filter) => (
                    <div className='flex justify-between' key={filter.id}>
                        <h5 className='font-semibold'>{filter.title}</h5>
                        <div className='flex font-semibold gap-2 text-[#7700CF]'>
                            <p>All</p>
                            <ChevronDownIcon className='h-6' />
                        </div>
                    </div>
                ))}
            </div>
            <div className='grid justify-start'>
                {filter2.map((filter2) => (
                    <label className='flex gap-2' htmlFor="" key={filter2.id}>
                        <input type="checkbox" name="" id="" />
                        <h5>{filter2.title}</h5>
                    </label>
                ))}
            </div>
            <div>
                <h5>Sort By</h5>
                <p>Relevance <span><ChevronDownIcon className='h-6 inline' /></span></p>
            </div>
        </div>
    )
}

export default Filter