const addAddressHandler = require('./addAddress')
const helpHandler = require('./help')
const signupHandler = require('./signup')
const credHandler = require('./cred')

const handlers = new Map([
  ['addaddress', addAddressHandler],
  ['help', helpHandler],
  ['signup', signupHandler],
  ['cred', credHandler],
])

module.exports = handlers
