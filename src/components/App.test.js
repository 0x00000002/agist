import React from 'react'
import App from './App'
import { shallow, mount } from 'enzyme'

const props = {
  correct: {
    location: {
      pathname: '/test-path'
    }
  },
  wrong: {
    location: ''
  }
}

describe('components/Dashboard', function () {
  it('should ...', async function () {
    const wrapper = mount(<App {...props.correct} />)
    expect(0).toBe(0)
  })

  it('should ...', async function () {
    const wrapper = mount(<App {...props.wrong} />)
    expect(0).toBe(0)
  })
})
