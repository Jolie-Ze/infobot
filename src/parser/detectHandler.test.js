const detectHandler = require('./detectHandler')
const handlers = require('../handlers/index')

describe('detectHandler', () => {
  test('it should properly parse a command name', () => {
    expect(detectHandler('!cred')).toEqual(handlers.get('cred'))
  })

  test('it should properly parse xp command', () => {
    expect(detectHandler('!read')).toEqual(handlers.get('read'))
  })

  test('it should ignore empty strings', () => {
    expect(detectHandler('')).toEqual(undefined)
  })

  test('it should ignore random messages', () => {
    expect(detectHandler('signup')).toEqual(undefined)
  })

  test('it should throw on unrecognized commands', () => {
    expect(() => detectHandler('!ac mafz')).toThrow(/flag/)
  })
})
