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

  // ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["*"]'
  // const url = `http://127.0.0.1:5001${path}`
  const url = `https://ipfs.infura.io:5001${path}`

  const headers = {
    Authorization: auth
  }

  const fetchResult = fetch(url, method, body, headers).then(
    res => handleResponse(res, action, next),
    err => handleErrors(err, action, next)
  )
  return fetchResult
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
