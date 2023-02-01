const supertest = require('supertest')
const app = require('../index')

describe('Integration Tests', () => {
  test('root', async () => {
    // const out = [{ name: 'abc', location: 'OoooO' }, { name: 'xyz', location: 'OoooO' }, { name: 'pqr', location: 'OoooO' }]
    await supertest(app).get('/').expect(200)
      .then((res) => {
        expect(res.body).toStrictEqual({ message: 'Root' })
      })
  })

  test('hello', async () => {
    await supertest(app).get('/hello').expect(200)
      .then((res) => {
        expect(res.body).toStrictEqual({ message: 'Hello Githook' })
      })
  })
})
