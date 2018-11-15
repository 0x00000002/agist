import React from 'react'
import gistAddress from './Fetch'
import { shallow } from 'enzyme'

const props = {
  location: {
    pathname: '/fakeLink'
  }
}

describe('components/Fetch', function () {
  it('should extract permalink from URI', function () {
    expect(gistAddress('/test')).toEqual('test')
  })

  // it('should contain gist name', async function () {
  //   const wrapper = shallow(<Fetch {...props} />)
  //   expect(wrapper.contains('fakeLink')).toBe(true)
  // })
})
