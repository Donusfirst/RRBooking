import React from 'react'
import Navbar from '../Components/Navbar';
import SlideImages from '../Components/SlideImages';
import Footer from '../Components/Footer';



function Home() {
  return (
    <div>
      <Navbar/>
      <SlideImages style={{ flex: 1 }} />
      <Footer/>
    </div>
  )
}

export default Home
