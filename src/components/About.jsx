import React from 'react'
import sql from '../sql.svg';
import './Skills.css';
import css from '../css.svg';

export default function About() {
  return (
    <div className='about-container'>
      <img id='sql' classname='.sql' src={sql} />
      <i class="fab fa-html5"></i>
      <img id='css' src={css} />
    


    </div>
  )
}
