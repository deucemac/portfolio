import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'
import Scrollspy from 'react-scrollspy'

const Nav = () => {
  return (
    <nav>
        <div className='name'>
        <NavLink to='/'>Gerand McDowell</NavLink>
        <p className='title'>Software Engineer</p>
        </div>
      
        <div className='profile' >
        <img className='profile-pic' src='https://i.imgur.com/JUnMFjn.jpg' />
        </div>
      
        <header className='header'>
          {/* <Link to='/home'><span>home</span></Link> */}
          <Scrollspy items={ ['section-1', 'section-2', 'section-3', 'section-4'] } currentClassName="is-current">  
          <a href='#section-1' ><span>home</span></a>
          <a href='#section-2' ><span>about</span></a>
          <a href='#section-3' ><span>projects</span></a>
          <a href='#section-4' ><span>contact</span></a>
          </Scrollspy>
        </header>
        
    </nav>
  )
}

export default Nav