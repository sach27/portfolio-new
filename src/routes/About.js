import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimage2 from '../components/Heroimage2';

import Aboutcontent from '../components/Aboutcontent';

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2 heading = "ABOUT" text = 
      "Intoduce yourself they asked? Scroll it down I replied" >
      </Heroimage2>
      <Aboutcontent/>
      
      
      
      <Footer />
    </div>
  )
}

export default About