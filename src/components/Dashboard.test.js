// import 'jsdom-global/register'
import React from 'react'
import Dashboard from './Dashboard'
import { shallow } from 'enzyme'
import apiResponses from '../state/apiResponse'

const test = {
  props: {
    user: apiResponses.registeredUser.user,
    userFetch: () => apiResponses.registeredUser.user.data,
    sessionTokenGet: jest.fn(),
    session: apiResponses.session
  },
  unregisteredUser: {
    user: apiResponses.unregisteredUser.user,
    sessionTokenGet: jest.fn(),
    session: apiResponses.session,
    userFetch: () => apiResponses.unregisteredUser.user.data
  },
  emptyProps: {
    sessionTokenGet: jest.fn(),
    session: apiResponses.session,
    userFetch: () => apiResponses.registeredUser.user.data,
    user: null
  }
}

describe('components/Dashboard', function () {
  it('should redirect to \'/deposit\' if user HAS BEEN registered', async function () {
    const component = shallow(<Dashboard {...test.props} />)
    expect(component.find('Redirect').prop('to')).toEqual('/deposit')
  })

  it('should redirect to \'/registration\' if user is NOT registered', async function () {
    const component = shallow(<Dashboard {...test.unregisteredUser} />)
    expect(component.find('Redirect').prop('to')).toEqual('/registration')
  })
})
