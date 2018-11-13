import * as types from './types'

export const userFetch = idToken => ({
  type: types.USER_FETCH,
  meta: {
    async: true,
    blocking: true,
    path: '/user',
    method: 'GET',
    auth: idToken
  }
})

export const userSetup = (idToken, ethereumAddress, termsAccepted, userData) => ({
  type: types.USER_SETUP,
  meta: {
    async: true,
    blocking: true,
    path: '/user/setup',
    method: 'PUT',
    auth: idToken,
    body: { ethereumAddress, termsAccepted, userData }
  }
})

export const userUpdate = (idToken, ethereumAddress) => ({
  type: types.USER_UPDATE,
  meta: {
    async: true,
    blocking: true,
    path: '/user/update',
    method: 'PUT',
    auth: idToken,
    body: { ethereumAddress }
  }
})
