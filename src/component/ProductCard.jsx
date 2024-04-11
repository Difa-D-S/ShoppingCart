import React from 'react'
import { useCart } from '../context/CartContext'

export const ProductCard = ({product}) => {

  const { addToCart } = useCart()
    
  return (
    <>
        <p className='px-4'>
          <span>{product.id}</span>
          <span>{product.image}</span>
          <span>{product.name}</span>
          <span>{product.price}</span>
          <span><button onClick={() => addToCart(product)}>Add to Cart</button></span>
        </p>

    </>
  )
}
