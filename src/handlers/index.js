const addAddressHandler = require('./addAddress')
const helpHandler = require('./help')
const signupHandler = require('./signup')
const credHandler = require('./cred')
const readHandler = require('./read')
const listenHandler = require('./listen')
const watchHandler = require('./watch')

const handlers = new Map([
  ['addaddress', addAddressHandler],
  ['help', helpHandler],
  ['signup', signupHandler],
  ['cred', credHandler],
  ['read', readHandler],
  ['listen', lisentHandler],
  ['watch', lisentHandler]
])

module.exports = handlers
