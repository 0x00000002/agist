const _settings = {
  siteName: 'Another Gist'
}

let settings
if (process.env.NODE_ENV === 'production') {
  // The app is a production packaged build
  if (process.env.REACT_APP_TARGET === 'staging') {
    // Use staging settings
    settings = {
      siteName: `${_settings.siteName} (staging)`
    }
  } else {
    settings = {
      siteName: _settings.siteName
    }
  }
} else if (process.env.NODE_ENV === 'development') {
  // The app is in development mode
  settings = {
    siteName: `${_settings.siteName} (development)`
  }
}

// Possibly funny list of possible error messages
export const errors = {
  codeMirror: [
    'External plugin CodeMirror made a HUGE mistake.',
    'CodeMirror reflects nothing!'
  ],
  // message(s) for wrong error reason
  _wrong: [
    'Really sad, but there is an error in the error message. Sorry.'
  ]
}

export const messages = {
  // message(s) for wrong error reason
  _wrong: [
    'Really sad, but there is an error in the error message. Sorry.'
  ]
}

export function displayMessage (message = 'others') {
  return displayRandomMessageFromArray(messages, message)
}

export function displayError (reason = 'others') {
  return displayRandomMessageFromArray(errors, reason)
}

function displayRandomMessageFromArray (list, type) {
  const messages = list[type] || list['_wrong']
  const random = Math.floor(Math.random() * Math.floor(messages.length))
  return messages[random]
}

export default settings
