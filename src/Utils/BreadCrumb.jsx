import React from 'react'

function BreadCrumb(props) {
    return (
        <div className='px-10 md:px-14 relative pt-40 pb-20'>
            {props.Title} {props.pageTitle}
        </div>
    )
}

export default BreadCrumb