import React from 'react'
import Header from './Header'
import { shallow } from 'enzyme'

const testProps = {
  code: 'test code',
  address: 'test address'
}

Header.saveCode = jest.fn()

describe('components/Header', function () {
  it('should call handler', async function () {
    const wrapper = shallow(<Header {...testProps} />)
    expect(wrapper.find('button').exists()).toEqual(true)
    wrapper.find('button').simulate('click')
    expect(Header.saveCode).toBeCalled()
  })
})
