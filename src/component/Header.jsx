import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assests/Image/Joobesthy Wireless Earbuds Bluetooth Headphones….jpeg'

export const Header = () => {
  return (
    <Header>
        <p>
        <Link to='/'> <img src={Logo} alt='Logo' style={{width:"20px"}} /> <span>Task 4</span> </Link>
        </p>
        <p>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/cart'>Cart</NavLink>
        </p>
    </Header>
  )
}
