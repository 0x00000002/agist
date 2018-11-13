import { fetch } from '../utils'

const apiService = () => next => action => {
  const result = next(action)
  if (!action.meta || !action.meta.async) {
    return result
  }

  const { path, method = 'GET', body, auth } = action.meta

  if (!path) {
    throw new Error(`'path' not specified for async action ${action.type}`)
  }

  const url = ``

  const headers = {
    Authorization: auth
  }

  return fetch(url, method, body, headers).then(
    res => handleResponse(res, action, next),
    err => handleErrors(err, action, next)
  )
}

export default apiService

function handleErrors (err, action, next) {
  next({
    type: `${action.type}_FAILED`,
    payload: err,
    meta: action.meta
  })

  return Promise.reject(err)
}

function handleResponse (res, action, next) {
  next({
    type: `${action.type}_COMPLETED`,
    payload: res,
    meta: action.meta
  })

  return res
}
