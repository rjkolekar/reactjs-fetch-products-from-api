import React from 'react'

const Product = () => {
  return (
    <div>
       <div className="flex mx-auto ">
        <div className="mt-4 p-2">
          <div className="border border-red-700 ">
            <img
              src={props.product.image}
              alt=""
              className="h-[80px] p-2"
            />
          </div>
          <div className='h-16'><h4 className="ml-16">{props.product.title}</h4></div>
          <div className="">
            <span className="mr-16">{props.product.category}</span>
            <span>{props.product.price}</span>
          </div>
        </div>              
      </div>
    </div>
  )
}

export default Product
