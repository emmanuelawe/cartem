import Banner from '@/components/Banner'
import ProductFeed from '@/components/ProductFeed'
import React from 'react'


interface Props {
  products: Product[],
  id?: string,
  title?: string,
  price?: number,
  description?: string,
  category?: string,
  image?: string,
  rating?: {string : number},
}

const Homepage = ({products}: any) => {
  return (
    <div>
      <main className='max-w-screen-2xl mx-auto'>
        {/* Banner */}
        <Banner />

        {/* Product Feed */}
        {/* <ProductFeed products={products} /> */}
        <p>{products}</p>
      </main>
    </div>
  )
}

export default Homepage

export async function getServerSideProps(context: any) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  )
return {
    props: { 
      products,
    }
}
}