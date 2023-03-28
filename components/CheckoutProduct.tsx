'use client'
import Image from 'next/image'
import React from 'react'

const CheckoutProduct = ({
    id, 
    title, 
    price, 
    description, 
    category, 
    image
}: any) => {
  return (
    <div className='grid grid-cols-5'>
        <Image src={image} height={200} width={200} 
        style={{objectFit: 'contain'}} alt="Product Image" />
    </div>
  )
}

export default CheckoutProduct