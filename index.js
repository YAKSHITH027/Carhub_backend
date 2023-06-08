const express = require('express')
const cors = require('cors')
const { connection } = require('./db')
const { user } = require('./routes/user.route')
const { OEM } = require('./routes/OEM.route')
const { marketplaceInventory } = require('./routes/marketplaceInventory.route')

const app = express()
require('dotenv').config()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send({ msg: 'home' })
})

app.use('/user', user)
app.use('/oem', OEM)
app.use('/cars', marketplaceInventory)

app.listen(process.env.PORT, async () => {
  try {
    await connection
    console.log('db is connected')
  } catch (error) {
    console.log(error.message)
  }
  console.log('port is running')
})
