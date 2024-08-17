const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()
const cardRoutes = require('./routes/card.js')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())

app.use(bodyParser.json())
app.use('/api', cardRoutes)

app.get('/ping', (req, res) => {
  res.send('Server is running')
})

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message)
  })
