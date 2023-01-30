
const express = require('express')

const app = express()

app.get('/', function (req, res) {
  res.send({ message: 'Index' })
})

app.get('/hello', function (req, res) {
  res.send({ message: 'Hello Githook' })
})

module.exports = app
