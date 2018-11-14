import React from 'react'
import Main from './Main'
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
    const wrapper = shallow(<Main {...props.correct} />)
    expect(0).toBe(1)
  })

  it('should ...', async function () {
    const wrapper = shallow(<Main {...props.wrong} />)
    expect(0).toBe(1)
  })
})
