import React, { Component } from 'react'

import './App.css'
import Container from './container'

import data from './data.json'

const headings = ['When', 'Who', 'Description']

class App extends Component {
  render() {
    return (
      <Container data={data} title='OpenLibrary API' headings={headings} />
    )
  } 
}

export default App
