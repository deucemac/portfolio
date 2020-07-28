import React from 'react'
import './Nav.css'
import { NavLink, Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <div className='name'>
        <NavLink to='/'>Gerand McDowell</NavLink>
        <p className='title'>Software Engineer</p>
        </div>
      
        <div className='profile' >
        <img src='https://i.imgur.com/JUnMFjn.jpg' />
        </div>
      
        <header className='header'>
          <Link to='/home'><span>home</span></Link>
          <Link to='/home'><span>about</span></Link>
          <Link to='/home'><span>projects</span></Link>
          <Link to='/home'><span>contact</span></Link>
        </header>
        
    </nav>
  )
}

export default Nav