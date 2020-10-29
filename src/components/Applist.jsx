import React, { Component } from 'react'
import Layout from '../components/shared/Layout'
import Home from './Home'
import About from './About'
import itemsJSON from '../data/items.json'
import Projects from '../components/Projects'
import './Applist.css'


export default class Applist extends Component {
  state = {
    apps: []
  }

  async componentDidMount() {
    const apps = itemsJSON
    this.setState({ apps })
  }

  render() {
    const webApps = this.state.apps
    const items = webApps.map((app, index) =>
      <Projects name={app.name} imgURL={app.imgURL} githubLink={app.githubLink} websiteURL={app.websiteURL} description={app.description} key={index} />
    )
    return (
      <Layout>
        <Home />
        <About />
        <div id='section-3' className='projects-container'>
          {items}
        </div>
      </Layout>
    )
  }
}
