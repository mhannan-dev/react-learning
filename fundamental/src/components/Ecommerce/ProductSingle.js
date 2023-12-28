import React from 'react'

const ProductSingle = ({product}) => {
    console.log(product.title);
  return (
    <>
     <div key={product.id} className="col-md-3 py-2">
          <div className="card text-center">
            <img className="card-img-top" src={product.imageUrl} alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">${product.price}</p>
              <a href="#" className="btn btn-primary">
                Add to cart
              </a>
            </div>
          </div>
        </div> 
    </>
  )
}

export default ProductSingle
