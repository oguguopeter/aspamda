import React from 'react'
import Nav from '../../Components/Nav/Nav'
import Footer from '../../Components/Footer/Footer'
import '../../styles/styles.css'
import Card from '../../Components/Card'
const Home = () => {
  return (
    <div>
        <Nav />
        <h1 className='height text-center'>Welcome to home Page</h1>
       <Card />
        <Footer />
    </div>
  )
}

export default Home