import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className='home-container'>
        <h1 className='greeting'>Hi I'm Gerand, here's what I've been up to!</h1>
        <Link><h1 className='see-more'>V</h1></Link>
      </div>
    </>
  )
}
