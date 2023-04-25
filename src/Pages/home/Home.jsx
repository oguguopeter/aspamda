import React from 'react'
import Nav from '../../Components/Nav/Nav'
import Footer from '../../Components/Footer/Footer'
import '../../styles/styles.css'
const Home = () => {
  return (
    <div>
        <Nav />
        <h1 className='height text-center'>Welcome to home Page</h1>
        <Footer />
    </div>
  )
}

export default Home