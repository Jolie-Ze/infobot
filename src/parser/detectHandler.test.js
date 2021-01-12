const detectHandler = require('./detectHandler')
const handlers = require('../handlers/index')

describe('detectHandler', () => {
  test('it should properly parse a command name', () => {
    expect(detectHandler('! signup')).toEqual(handlers.get('signup'))
  })

  test('it should properly parse cred command', () => {
    expect(detectHandler('!cred username')).toEqual(handlers.get('cred'))
  })

  test('it should ignore empty strings', () => {
    expect(detectHandler('')).toEqual(undefined)
  })

  test('it should ignore random messages', () => {
    expect(detectHandler('signup')).toEqual(undefined)
  })

  test('it should throw on unrecognized commands', () => {
    expect(() => detectHandler('! mafz')).toThrow(/flag/)
  })
})
