import React from 'react'

function BreadCrumb(props) {
    return (
        <div className='px-10 md:px-14 relative'>
            {props.Title} {props.pageTitle}
        </div>
    )
}

export default BreadCrumb