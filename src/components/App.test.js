import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

const props = {
  correct: {
    user: 'user1'
  },
  wrong: {
    user: null
  }
}

describe('components/Dashboard', function () {
  it('should ...', async function () {
    const wrapper = shallow(<App {...props.correct} />)
    expect(0).toBe(0)
  })

  it('should ...', async function () {
    const wrapper = shallow(<App {...props.wrong} />)
    expect(0).toBe(0)
  })
})
