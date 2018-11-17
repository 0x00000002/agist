import React from 'react'
import Code from './Code'
import { shallow } from 'enzyme'

const testProps = {
  code: 'test code'
}

describe('components/Code', function () {
  it('should contain gist name', async function () {
    const wrapper = shallow(<Code {...testProps} />)
    // expect(wrapper.contains('test code')).toBe(true)
  })
})
