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
  checkbox: [
    'Checkbox could not control it',
    'Checkbox logic is too messy'
  ],
  button: [
    'Button is absent. Someone stole it.',
    'Button is broken. Try again later.'
  ],
  progressBar: [
    'Progress bar is not capable to display all of your progress for now'
  ],
  circularProgress: [
    'The square power of this circle can not be triangulated like that'
  ],
  others: [
    'Unknown error'
  ],
  disclaimer: [
    'Disclaimer is absent. What happened with it?'
  ],
  qrCode: [
    'It takes time to draw that pattern without error...'
  ],
  copyWidget: [
    'Can not copy address to the memory. Does it have enough space?'
  ],
  historyList: [
    'List was too long and broke the app',
    'Can not calculate everything. How many times you pressed that button?',
    'No more history. All is forgotten. Such a sad..'
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
