import { Search, ShoppingCart } from '@material-ui/icons'
import React from 'react'
import { Badge } from "@material-ui/core"
import './Navbar.css'

import {Link} from "react-router-dom";
import {useSelector} from 'react-redux'


const Navbar = () => {

  // ###redux to cart
const quantity = useSelector(state => state.cart.quantity)
const user = useSelector(state =>state.user.currentUser)



const handleLogout = (e) =>{
  e.preventDefault()
  // dispatch(remove())
}

  return (
    <div className='Navbar'>
      <div className='nav-search'>
        <input type="search" placeholder='Search' />
        <Search style={{cursor:'pointer', color: '#333'}} />
      </div>
      <div className='logo'>
        <Link to='/'>
        <h1>AMBRO.</h1>
        </Link>
      </div>
      <div className='nav-links'>

        <Link to="/register">
          <p>Register</p>
        </Link>
         
        <Link to="/login">
          <p>Login</p>
        </Link>
        { user && 
          <p onClick={handleLogout}>Logout</p>
        }
        <Link to="/cart">
          <span className='nav-cart'>
          <Badge badgeContent={quantity} color="primary">
              <ShoppingCart />
          </Badge>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Navbar