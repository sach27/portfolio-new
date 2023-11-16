import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimage2 from '../components/Heroimage2';
import Card from '../components/workcard';

export const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2 text="SCROLL DOWN TO SEE SOME OF MY LATEST PROJECTS"/>
      <Card />
      <Footer />
    </div>
  )
}
export default Project