'use client'

import { GetServerSidePropsContext } from "next"
import Product from "./Product"

interface Props {
  products: Product[],
  id?: string,
  title?: string,
  price?: number,
  description?: string,
  category?: string,
  image?: string,
  rating?: {string : number},
  key?: () => JSX.Element
}

const ProductFeed = ({products}: Props) => {
  return (
    <div>
      {products.map(({id, title, price, description, category, image, rating }: any) => (
        <Product key={id} 
        id={id}
        title={title}
        description={description}
        price={price}
        category={category}
        image={image}
        />
      ))}
    </div>
  )
}

export default ProductFeed
