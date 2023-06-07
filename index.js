const express = require('express')
const { connection } = require('./db')

const app = express()
require('dotenv').config()

app.get('/', (req, res) => {
  res.status(200).send({ msg: 'home' })
})

app.listen(process.env.PORT, async () => {
  try {
    await connection
    console.log('db is connected')
  } catch (error) {
    console.log(error.message)
  }
  console.log('port is running')
})
