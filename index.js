
const express = require('express')
const _ = require('underscore')

const app = express()

const stringifyObj2 = (o, location) => JSON.stringify({ name: o.name, location })

const uniqueMbEntries = [{ name: 'abc' }, { name: 'xyz' }, { name: 'pqr' }]

app.get('/', function (req, res) {
  const location = 'OoooO'
  const uniqueMbEntriesByLocation = _.map(uniqueMbEntries, (o) => stringifyObj2(o, location))

  res.send({ message: uniqueMbEntriesByLocation })
})

app.get('/hello', function (req, res) {
  res.send({ message: 'Hello Githook' })
})

module.exports = app
