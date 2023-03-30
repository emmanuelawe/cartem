'use client'
import { addToBasket, removeFromBasket } from '@/redux/slices/basketSlice';
import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React, { useState } from 'react'
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';


const CheckoutProduct = ({
    id, 
    title, 
    price, 
    description, 
    category, 
    image
}: any) => {
  const dispatch = useDispatch()

  // FIX THIS LATER
  const [rating] = useState(4
    // Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    )

    const addItemToBasket = () => {
      const product = {
        id, 
        title, 
        price, 
        description, 
        category, 
        image
      }

      // Sending the product as an action to the Redux store - the basket slice
      dispatch(addToBasket(product))
    }

    const removeItemFromBasket = () => {

      // Sending the product as an action to the Redux store - the basket slice
      dispatch(removeFromBasket({id}))
    }


  return (
    <div className='grid grid-cols-5'>
        <Image src={image} height={200} width={200} 
        style={{objectFit: 'contain'}} alt="Product Image" />

        {/* Middle */}
      <div className='col-span-3 mx-5'>
        <p>{title}</p>
        <div className='flex'>
        {Array(rating)
        .fill(rating)
        .map((_, i) => (
          <StarIcon className="h-5 text-[#F15E22]" key={i} />
        ))}
        </div>

        <p className='text-xs my-2 line-clamp-3'>{description}</p>
        
        <div className='flex items-center space-x-2'>
        <div>
        <Currency 
        quantity={price}
        currency="USD"
        />
        </div>
        <p className='text-xs text-gray-500'>FREE Next day delivery</p>
        </div>
      </div>

      {/* Right Add/Remove buttons */}

      <div className='flex flex-col space-y-2 my-auto justify-self-end'>
        <button className='button' onClick={addItemToBasket}>Add to Basket</button>
        <button className='button' onClick={removeItemFromBasket}>Remove from Basket</button>
      </div>

    </div>
  )
}

export default CheckoutProduct