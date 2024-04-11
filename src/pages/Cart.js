import React from 'react'
import {useCart} from '../context/CartContext'
import { CartCard } from '../component/CartCard';
// import img1 from '../assests/Image/img1.jpeg'


export const Cart = () => {

  const {total, cartList} = useCart();

  // const products = [
  //   {id: 1, "name": "Sony Wh-Ch510 Bluetooth", "price" : 149, "image": "img1"},
  //   {id: 2, "name": "Sony Wh-Ch510 Bluetooth", "price" : 149, "image": "img2"}
  // ]
  return (
    <>
    <section className='m-5'>
      <h1>CartItems : {cartList.length} / {total} </h1>
      {cartList.map((product) => (
       <CartCard key={product.id} product={product}/>
      ))}
    </section>
    </>
  )
}
