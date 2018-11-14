// import 'jsdom-global/register'
import React from 'react'
import App from './App'
import ReactDOM from 'react-dom'

describe('App routing', function () {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
