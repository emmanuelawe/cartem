import Banner from '@/components/Banner'
import ProductFeed from '@/components/ProductFeed'
import React from 'react'

const Homepage = () => {
  return (
    <div>
      <main className='max-w-screen-2xl mx-auto'>
        {/* Banner */}
        <Banner />

        {/* Product Feed */}
        <ProductFeed />
      </main>
    </div>
  )
}

export default Homepage