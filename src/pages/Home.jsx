import Category  from '../components/Category'
import Products  from '../components/Products'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Subscribe from '../components/Subscribe'
import Slider from '../components/Slider'
import Announcement from '../components/Announcement'

const Home = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Category />
        <Products />
        <Subscribe />
        <Footer />
    </div>
  )
}

export default Home