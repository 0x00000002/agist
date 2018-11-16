
const R = require('ramda')

const getFirstSegment = R.compose(R.nth(1), R.split('/')) // element 0 is empty after split ('/URI')
const gistAddress = path => getFirstSegment(path)

export default gistAddress
