'use client'

// import { GetServerSidePropsContext } from "next"
import Product from "./Product"

interface Props {
  products: Product[],
  id?: string,
  title?: string,
  price?: any,
  description?: string,
  category?: string,
  image?: any,
  rating?: {string : number},
  key?: () => JSX.Element
}

const ProductFeed = ({products}: Props) => {
  

  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 
     md:-mt-52 mx-auto">
      {products
      .slice(0,6)
      .map(({id, title, price, description, category, image, rating }: any) => (
        <Product key={id} 
        id={id}
        title={title}
        description={description}
        price={price}
        category={category}
        image={image}
        />
      ))}

      <img className="md:col-span-full hidden md:inline" 
      src='https://links.papareact.com/dyz' 
      alt='' />

      <div className="md:col-span-2">
      {products
      .slice(6,7)
      .map(({id, title, price, description, category, image }: any) => (
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

      {products
      .slice(7, products.length)
      .map(({id, title, price, description, category, image }: any) => (
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
