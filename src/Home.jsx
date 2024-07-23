import React, { useState } from 'react'
import Hero from './components/hero/Hero'
import Features from './components/features/Features'
import Otherhome from './components/otherHome/Otherhome'


const Home = () => {


  window.scrollTo(0,0)
  

  return (
    <div>
      <Hero/>
      <Features/>
      <Otherhome/>   
    </div>
  )
}

export default Home