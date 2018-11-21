import React from 'react'
import Header from './Header'
import { shallow } from 'enzyme'

const testProps = {
  code: 'test code',
  address: 'test address',
  updater: jest.fn()
}

describe('components/Header', function () {
  it('should call save-function on click', async function () {
    const wrapper = shallow(<Header {...testProps} />)
    wrapper.instance().saveCode = jest.fn()
    expect(wrapper.find('button').exists()).toEqual(true)
    wrapper.find('button').simulate('click')
    expect(wrapper.instance().saveCode).toBeCalled()
  })

  it('should save code', async function () {
    const wrapper = shallow(<Header {...testProps} />)
    expect(wrapper.find('button').exists()).toEqual(true)
    wrapper.find('button').simulate('click')
    expect(testProps.updater).toBeCalled()
  })
})
