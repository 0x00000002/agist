'use strict'
import isomorphicFetch from 'isomorphic-fetch'
import fetch, { jsonParse, parseStatus } from './fetch'

jest.mock('isomorphic-fetch')

describe('jsonParse', function () {
  it('should parse JSON', function () {
    expect(jsonParse('{"fake":true}')).toEqual({ fake: true })
  })

  it('should return null if not JSON', function () {
    expect(jsonParse()).toEqual(null)
  })
})

describe('parseStatus', function () {
  it(
    'should parse the output of the result promise for a 200',
    async function () {
      const result = await parseStatus(
        200,
        Promise.resolve('{"fake":"response"}')
      )

      expect(result).toEqual({ fake: 'response' })
    }
  )

  it('should reject errors', function () {
    return expect(
      parseStatus(400, Promise.resolve('fake error'))
    ).rejects.toEqual(new Error('400: fake error'))
  })
})

describe('fetch', function () {
  beforeEach(() => {
    isomorphicFetch.mockImplementation(() => Promise.resolve({
      status: 200,
      text: () => Promise.resolve('{"fake":"response"}')
    }))
  })

  afterEach(() => {
    isomorphicFetch.mockClear()
  })

  it('should handle GET', async function () {
    const result = await fetch('fake-url', 'GET', { body: 'fake' }, {
      header: 'fake'
    })

    expect(isomorphicFetch.mock.calls.length).toBe(1)
    expect(isomorphicFetch.mock.calls[0]).toEqual([
      'fake-url',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          // 'Content-Type': 'application/json',
          header: 'fake',
          'pinata_api_key': process.env.REACT_APP_PINATA_API_KEY,
          'pinata_secret_api_key': process.env.REACT_APP_PINATA_SECRET,
        },
        body: null
      }
    ])
    expect(result).toEqual({ fake: 'response' })
  })

  it('should handle POST', async function () {
    await fetch('fake-url', 'POST', { body: 'fake' }, {
      header: 'fake'
    })

    expect(isomorphicFetch.mock.calls[0]).toEqual([
      'fake-url',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          // 'Content-Type': 'application/json',
          header: 'fake'
        },
        body: '{"body":"fake"}'
      }
    ])
  })
})
