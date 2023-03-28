import React from 'react'
import CartDetails from '../components/CartDetails'
import { useSite } from '../context/Context'

const Cart = () => {
  const {cartShops}=useSite()
  return (
    <div className="m-top">
    {cartShops.length===0?(
    <h1>senin cartin bosdur</h1>
    ):(
      cartShops.map((thing) => (
        <CartDetails
          key={thing.id}
          description={thing.description}
          id={thing.id}
          imageUrl={thing.imageUrl}
          price={thing.price}
          productName={thing.productName}
          showAddBtn={false}
          quantity={thing.quantity}
          showDeleteBtn={true}
        />
      ))
    )}
  </div>
  )
}

export default Cart