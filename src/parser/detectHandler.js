const { RequestHandlerError } = require('../error-utils')
const handlers = require('../handlers/index')

const noop = () => undefined

const detectHandler = (message) => {
  const [requestedNamespace, requestedHandler] = message.split(' ')
  // If it's not a flag, we can safely ignore this command.
  if (!requestedNamespace.startsWith('!ac') && !requestedNamespace.startsWith('!cred')) {
    return noop()
  }

  // Filter the standalone cred handler to only allow !cred instead of !ac cred
  if (requestedNamespace === '!ac' && requestedHandler === 'cred') {
    throw new RequestHandlerError(
      `could not find command with flag ${requestedHandler}`,
    )
  }

  let receivedHandler = null

  if (requestedNamespace.startsWith('!ac')) {
    receivedHandler = handlers.get(requestedHandler)
  } else if (requestedNamespace.startsWith('!cred')) {
    receivedHandler = handlers.get(requestedNamespace.substring(1))
  }
  if (requestedNamespace !== '!ac' && requestedNamespace !== '!cred') {
    throw new RequestHandlerError(
      `Could not find command with flag ${requestedNamespace}`,
    )
  }

  if (typeof receivedHandler !== 'function') {
    throw new RequestHandlerError(
      `Could not find command with flag ${requestedHandler}`,
    )
  }

  return receivedHandler
}

module.exports = detectHandler
