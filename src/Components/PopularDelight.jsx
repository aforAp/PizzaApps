import React from 'react'
import tag from "../../src/assets/PriceTag.png";
const PopularDelight = () => {
  return (
    <div className='flex flex-row w-full justify-items-start'>
        <div>
            <img src={tag} alt="hello" className='h-18' />
        </div>
        <div className='flex flex-col justify-center'>
        <h1 className="text-1.5 font-bold">Popular Vegs Delight</h1>
        <p className='text-black/50'>FREE Delivery For Orders Above $149</p>
        </div>
    </div>
  )
}

export default PopularDelight