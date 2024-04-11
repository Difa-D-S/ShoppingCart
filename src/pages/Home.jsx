import React from 'react'
import { ProductCard } from '../component/ProductCard'
import { useCart } from '../context/CartContext';

export const Home = () => {

  const {total} = useCart();
  
  const products = [
      {id: 1, "name": "Sony Wh-Ch510 Bluetooth", "price" : 149, "image": "img1"},
      {id: 2, "name": "Sony Wh-Ch510 Bluetooth", "price" : 149, "image": "img2"}
    ]
  return (
    <>
        <section>
        <h1>ProductItems : {products.length} / {total} </h1>
        {products.map((product) => (
           <ProductCard key={product.id} product={product}/>
      ))}
        </section>
    </>
  )
}
