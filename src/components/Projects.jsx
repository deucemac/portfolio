import React from 'react'
import './Projects.css'

export default function Projects(props) {
  return (
    <div className='project-container'>
      <h1 className='name-backg'>{props.name}</h1>
      
      <div className='below-name'>
      <div className='project-img-container'>
        <img className='site-img' src={props.imgURL} />
      </div>
      <div className='code-website'>
        <a className='github' href={props.githubLink} target="_blank">code |</a>
        <a className='website' href={props.websiteURL} target="_blank">| website</a>
      </div>
      <div className='describe'>
        <p className='p-description' >{props.description}</p>
        </div>
      </div>
      
    </div>
  )
}
