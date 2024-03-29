// 'use client'
import Banner from '@/components/Banner'
import ProductFeed from '@/components/ProductFeed'
import React, { useEffect } from 'react'


interface Props {
  products: Product,
  id?: string,
  title?: string,
  price?: any,
  description?: string,
  category?: string,
  image?: any,
  rating?: {string : number},
}

const fetchProducts = async () => {
  const productsResponse = await fetch("https://fakestoreapi.com/products", {
    cache: 'no-store'
  })
  const productsMain = await productsResponse.json()

  return productsMain
}



const Homepage = async () => {
  const products = await fetchProducts()

  return (
    <div>
      <main className='max-w-screen-2xl mx-auto'>
        {/* Banner */}
        <Banner />

        {/* Product Feed */}
        <ProductFeed products={products} />
        {/* <p>{products}</p> */}
      </main>
    </div>
  )
}

export default Homepage

// export async function getServerSideProps(context: any) {
//   const products = await fetch("https://fakestoreapi.com/products").then(
//     (res) => res.json()
//   )
// return {
//     props: { 
//       products,
//     }
// }
// }