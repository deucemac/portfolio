import React, { Component } from 'react'
import Layout from '../components/shared/Layout'
import Home from './Home'
import About from './About'

export default class Applist extends Component {
  state = {
    apps: []
  }
  
  render() {
    return (
      <Layout>
        <Home />
        <About /> 
     </Layout>
    )
  }
}
