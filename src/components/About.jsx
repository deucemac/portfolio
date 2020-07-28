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
    <>
      <h1 id='section-2' className='tools'>My Tool Kit:</h1>
    <div  className='about-container'>
      
      <div className='box-sql p'>
        <img id='sql' className='.sql' src={sql} alt='img' />
        <p className='description'>SQL</p>
      </div>

      <div className='box-html p'>
          <i className="fab fa-html5"></i>
          <p className='description'>HTML</p>
      </div>
      
      <div className='box-css p'>
          <img id='css' src={css} alt='img' />
          <p className='description'>CSS</p>
      </div>
      
      <div className='box-js p'>
          <i className="fab fa-js js"></i>
          <p className='description'>JAVASCRIPT</p>
      </div>
      
      <div className='box-react p'>
          <i className="fab fa-react"></i>
          <p className='description'>JS-REACT</p>
      </div>
      
      <div className='box-node p'>
          <i className="fab fa-node"></i>
          <p className='description'>NODE.JS</p>
      </div>
      
      <div className='box-express p'>
          <img id='express' src={express} alt='img' />
          <p className='description'>EXPRESS</p>
      </div>

      <div className='box-ruby p'>
          <img id='ruby' src={ruby} alt='img' />
          <p className='description'>RUBY</p>
      </div>
      
      <div className='box-rails p'>
          <img id='rails' src={rails} alt='img' />
          <p className='description'>RUBY ON RAILS</p>
      </div>
      
      <div className='box-mongo p' >
          <img id='mongo' src={mongodb} alt='img' />
          <p className='description'>MONGODB</p>
      </div>
      
      <div className='box-post p'>
          <img id='postgresql' className='post' src={post} alt='img' />
          <p className='description'>POSTGRESQL</p>
      </div>

    </div>
      </>
  )
}
