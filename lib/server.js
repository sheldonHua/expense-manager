const express = require('express')
const mongoose = require('mongoose')
const PORT = 8080

const uri = 'mongodb://localhost/expenseManager'

mongoose.connect(uri)

const app = express()

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`)
  })
  

