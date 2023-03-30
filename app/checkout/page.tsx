'use client'
import CheckoutProduct from '@/components/CheckoutProduct'
import { selectItems, selectTotal } from '@/redux/slices/basketSlice'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import Currency from 'react-currency-formatter';
import { useSession } from 'next-auth/react'
import { Session } from 'next-auth'

const CheckoutPage = () => {
  const items = useSelector(selectItems)
  const {data: session} = useSession()
  const total = useSelector(selectTotal)
  return (
    <div className='h-auto'>
      
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
    {items.length > 0 && (

    <div className='flex flex-col bg-white md:w-[50%] p-10 shadow-md'>
      {items.length > 0 && (
        <>
        <h2>Subtotal ({items.length} items): {" "}
        <span className='font-bold'>
          <Currency quantity={total} currency="USD" />
        </span>
        </h2>

        <button className={`button mt-2 ${!session && 'from-gray-300 to-gray-400 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
          {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
        </button>


        </>
      )}
    </div>
    )}

    </main>

    </div>
  )
}

export default CheckoutPage