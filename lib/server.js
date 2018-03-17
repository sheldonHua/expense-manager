const express = require('express')
const mongoose = require('mongoose')
const PORT = 8080
const Expense = require('./models/expense');

const uri = 'mongodb://localhost/expenseManager'

mongoose.connect(uri);

const app = express();

let newExpense = new Expense({
  description: 'Insurance',
  cost: 600
});

newExpense
  .save()
  .then(doc => {
    console.log('testttt',doc);
  })
  .catch(err => {
    console.log(err.message);
  })


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`)
  })
  

