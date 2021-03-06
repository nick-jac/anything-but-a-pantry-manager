const env = require('../test-environment')
const usersDb = require('../../../server/db/usersDb')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})
afterEach(() => env.cleanup(testDb))

test('get users from database', () => {
  return usersDb.getUsers(testDb)
    .then(users => {
      expect(users[0].hasOwnProperty('first_name')).toBeTruthy()
      expect(users[0].hasOwnProperty('last_name')).toBeTruthy()
    })
})

test('get user by auth_id', () => {
  const expectedValue = 1

  return usersDb.getUserByAuthId(expectedValue, testDb)
    .then(user => {
      expect(user.auth_id).toEqual(expectedValue)
    })
})