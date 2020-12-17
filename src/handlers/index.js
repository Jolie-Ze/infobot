const addAddressHandler = require('./addAddress')
const helpHandler = require('./help')
const signupHandler = require('./signup')
const credHandler = require('./cred')
const readHandler = require('./read')

const handlers = new Map([
  ['addaddress', addAddressHandler],
  ['help', helpHandler],
  ['signup', signupHandler],
  ['cred', credHandler],
  ['read', readHandler],
])

module.exports = handlers
