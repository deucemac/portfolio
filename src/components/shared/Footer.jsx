import React from 'react'
import './Footer.css'

const Footer = () => (
  <footer>
    <div id='section-4' className='footer'>
      <div className='bottom-icon'>
      <a className='bottom' href='https://www.linkedin.com/in/gerand-mcdowell-6102851b1/' target="_blank">
        <i className="fab fa-linkedin" id='linkedIn-icon'></i>
        </a>
        </div>

        <div className='bottom-icon'>
      <a className='bottom' href='https://github.com/deucemac' target="_blank">
        <i className="fab fa-github" id='github-icon'></i>
        </a>
        </div>
        
        <div className='bottom-icon'>
        <p className='email bottom'>email: deucemac123@gmail.com</p>
        </div>
    </div>
  </footer>
)

export default Footer
