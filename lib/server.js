const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');

const PORT = 8080;
const Expense = require('./models/expense');

const uri = 'mongodb://localhost:27017/expenseManager';

mongoose.connect(uri);

const app = express();

app.use(bodyParse());

// API end point
app.get("/expenses", (req, res) => {
  Expense
    .find() // Find all the expense
    .then(docs => {
      // If you find any, send back to client in json
      res.status(200).json({
          message: 'success',
          payload: docs
        })
        
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      })
    })
});

app.post('/addExpense', (req, res) => {
  // create a new expense instance
  console.log(req.body);
  const expense = new Expense({
    description: req.body.description, // Get post data from params
    cost: req.body.cost
  })
  expense
    .save() // Save to database
    .then(docs => {
      // If success send back the post data
      res.status(201).json({
          message: 'success',
          payload: docs
        })
        
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      })
    })
})

app.delete('/expenses/:id', (req, res) => {
  const id = req.params.id
  

  Expense
    .findByIdAndRemove(id)
    .then(doc => {
      res.status(200).json({
        messsage: 'success',
        payload: doc
      })
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      })
    })

});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`)
})