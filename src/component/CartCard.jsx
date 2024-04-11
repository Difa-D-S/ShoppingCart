import React from 'react'
import { useCart } from '../context/CartContext'

export const CartCard = ({product}) => {
  
  const { removeFromCart } = useCart()

  const {name, price, image} = product;

  return (
    <div>
         <p className='px-4'>
          <span>{image}</span>
          <span>{name}</span>
          <span>{price}</span>
          <span><button onClick={() => removeFromCart(product)}>Remove</button></span>
        </p>
    </div>
  )
}
