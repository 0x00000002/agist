import isomorphicFetch from 'isomorphic-fetch'

export const jsonParse = x => {
  try {
    return JSON.parse(x)
  } catch (e) {
    return null
  }
}

export default (url, method, body, _headers) => {
  const headers = {
    Accept: 'application/json',
    // 'Content-Type': 'application/json',
    ..._headers
  }
  const options = {
    method,
    headers,
    body: method !== 'GET' ? JSON.stringify(body) : null
  }
  return isomorphicFetch(url, options).then(res =>
    parseStatus(res.status, res.text()))
}

export const parseStatus = (status, res) => {
  return new Promise((resolve, reject) => {
    if (status >= 200 && status < 300) {
      res.then(response => {
        resolve(jsonParse(response))
      })
    } else {
      res.then(response => reject(new Error(`${status}: ${response}`)))
    }
  })
}
