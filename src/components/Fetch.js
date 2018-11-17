
const R = require('ramda')
// we need the second element, because:
// element 0 is empty after split ('/URI')
const getFirstSegment = R.compose(R.nth(1), R.split('/'))
const gistAddress = path => getFirstSegment(path)

export default gistAddress
