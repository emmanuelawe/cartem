'use client'
import CheckoutProduct from '@/components/CheckoutProduct'
import { selectItems } from '@/redux/slices/basketSlice'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

const CheckoutPage = () => {
  const items = useSelector(selectItems)
  return (
    <div className='h-screen'>
      
    <main className='lg:flex max-w-screen-2xl mx-auto'>
    {/* Left  */}
    <div className='flex-grow m-5 shadow-sm'>
      <Image src="https://links.papareact.com/ikj"
       alt="Ad"
       width={1020}
       height={250}
       style={{objectFit: 'contain'}}
       />

    <div className='flex flex-col p-5 space-y-10 bg-white'>
      <h1 className='text-3xl border-b pb-4'>
        {items.length === 0 ? 'Your Cartem cart is empty.' :
        'Shopping Cart'}
      </h1>

        {items.map((item : any, i: any) => (
          <CheckoutProduct 
          key={i}
          id={item.id} 
          title={item.title} 
          price={item.price} 
          description={item.description} 
          category={item.category} 
          image={item.image}
          />
        ))}

    </div>

    </div>

    {/* Right */}
    <div>

    </div>

    </main>

    </div>
  )
}

export default CheckoutPage