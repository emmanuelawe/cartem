

interface Props {
    products?: Product[],
    id?: string,
    title?: string,
    price?: number,
    description?: string,
    category?: string,
    image?: string,
    rating?: {string : number},
    key?: ({ key }: Props) => JSX.Element
  }
  

const Product = ({id, title, price, description, category, image, rating}: Props) => {
  return (
    <div>
        <p>{category}</p>
    </div>
  )
}

export default Product