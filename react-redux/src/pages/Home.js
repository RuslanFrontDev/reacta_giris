import React from 'react'
import { useDispatch } from 'react-redux'
import ProductCard from '../components/ProductCard'
import Products from '../products.json';
import {addToCart} from '../stores/product'
const Home = () => {
  const shopping = []
Object.keys(Products).map(product=>shopping.push(Products[product]))
const dispatch=useDispatch()

  return (
    <div className='home'>
      {shopping.map(shops=>(
        <ProductCard
        key={shops.id}
        id={shops.id}
        imageUrl={shops.imageUrl}
        productName={shops.productName}
        price={shops.price}
        description={shops.description}
        quantity={shops.quantity}
        onClick={() => {
          dispatch(
            addToCart({
              id: shops.id,
              productName: shops.productName,
              price: shops.price,
              description: shops.description,
              imageUrl: shops.imageUrl,
            })
          );
        }}
        />
      ))}
    </div>
  )
}

export default Home