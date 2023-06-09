import React from 'react'

const BasketItem = ({item, product}) => {
  return (
    <div>
      {product.title}X{item.amount}
    </div>
  )
}

export default BasketItem