import Image from 'next/image'
import React from 'react'

const page = () => {
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
      <h1 className='text-3xl border-b pb-4'>Your Shopping Basket</h1>
    </div>

    </div>

    {/* Right */}
    <div>

    </div>

    </main>

    </div>
  )
}

export default page