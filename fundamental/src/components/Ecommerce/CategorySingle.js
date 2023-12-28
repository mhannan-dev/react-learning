import React from 'react'

const CategorySingle = ({category}) => {
    // console.log("category",category);
    return (
        <>
            <div className='col-md-2'>
                <a href='#' className='text-decoration-none'>
                    <img variant="top" src={category.image} width="150" />
                    <h6 className='py-2'>{ category.title }</h6>
                </a>
            </div>
        </>
    )
}

export default CategorySingle
