import React, { Component } from 'react'
import Code from './Code'

class Main extends Component {
  render () {
    return (
      <div>
        <h1>Create A Gist</h1>
        <Code theCode={'/* ES5 highlighting only */'} />
      </div>
    )
  }
}

export default Main
