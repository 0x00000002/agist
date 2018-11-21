import React from 'react'
import Code from './Code'
import CodeMirror from 'react-codemirror'
import { shallow } from 'enzyme'

const testProps = {
  code: 'test code',
  handler: jest.fn()
}

describe('components/Code', function () {
  it('should contain gist name', async function () {
    const wrapper = shallow(<Code {...testProps} />)
    expect(wrapper.find(CodeMirror).exists()).toEqual(true)
    wrapper.find(CodeMirror).simulate('change')
    expect(testProps.handler).toBeCalled()
  })
})
