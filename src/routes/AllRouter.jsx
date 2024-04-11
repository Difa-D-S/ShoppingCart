import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home, Cart} from '../pages/index'

export const AllRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
    </>
  )
}
