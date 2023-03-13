'use client'
import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useState } from "react"
import Currency from 'react-currency-formatter';

const MAX_RATING = 5
const MIN_RATING = 1

interface Props {
    products?: Product[],
    id?: string,
    title?: string,
    price?: any,
    description?: string,
    category?: string,
    image?: any,
    rating?: {string : number},
    key?: ({ key }: Props) => JSX.Element
  }
  

const Product = ({id, title, price, description, category, image}: Props) => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING
    )
  )

  return (
    <div className="relative flex flex-col bg-white m-5 z-30 p-10">
        <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

        <Image src={image} alt=''
        height={200} width={200} 
        />
        <h4 className="my-3">{title}</h4>
      
      <div className="flex">
        {Array(rating)
        .fill(rating)
        .map((_, i) => (
          <StarIcon className="h-5 text-[#F15E22]" key={i} />
        ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5 font-bold text-lg">
        <Currency 
        quantity={price}
        currency="USD"
        />
      </div>

      <button className="mt-auto button">Add to Basket</button>

    </div>
  )
}

export default Product