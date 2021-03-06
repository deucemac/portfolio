import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
// import Scrollspy from 'react-scrollspy'

export default function Home() {
  return (
    <>
      <div id='section-1' className='home-container'>
        <h1 className='greeting'>Hi I'm Gerand, a NYC based programmer. Here's what I've been up to!</h1>
        <Link to='/about'><h1 className='see-more'>V</h1></Link>
      </div>
    </>
  )
}
