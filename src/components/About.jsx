import React from 'react'
import sql from '../sql.svg';
import './Skills.css';
import css from '../css.svg';
import express from '../express.svg';
import ruby from '../ruby.svg';
import rails from '../rails.svg';
import mongodb from '../mongodb.svg'
import post from '../post.svg';

export default function About() {
  return (
    <div className='about-container'>
      <img id='sql' classname='.sql' src={sql} alt='img' />
      <i className="fab fa-html5"></i>
      <img id='css' src={css} alt='img'/>
      <i className="fab fa-js js"></i>
      <i class="fab fa-react"></i>
      <i class="fab fa-node"></i>
      <img id='express' src={express} alt='img'/>
      <img id='ruby' src={ruby} alt='img'/>
      <img id='rails' src={rails} alt='img'/>
      <img id='mongo' src={mongodb} alt='img'/>
      <img id='postgresql' className='post' src={post} alt='img'/>

    </div>
  )
}
