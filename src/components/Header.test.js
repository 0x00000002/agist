import React from 'react'
import Header from './Header'
import { mount } from 'enzyme'

const testProps = {
  code: 'test code',
  address: 'test address',
  updater: jest.fn()
}

describe('components/Header', function () {
  it('should render', async function () {
    const wrapper = mount(<Header {...testProps} />)
    wrapper.find('button').props('onClick').onClick = jest.fn()
    wrapper.saveCode = jest.fn()
    expect(wrapper.find('button').exists()).toEqual(true)
  })

  it('should save code', async function () {
    const wrapper = mount(<Header {...testProps} />)
    expect(wrapper.find('button').exists()).toEqual(true)
    wrapper.find('button').simulate('click')
    expect(testProps.updater).toBeCalled()
  })
})
