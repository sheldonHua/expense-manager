const express = require('express');
const mongoose = require('mongoose');
const PORT = 8080;
const Expense = require('./models/expense');

const uri = 'mongodb://localhost:27017/expenseManager';

mongoose.connect(uri);

const app = express();

// API end point
app.get("/expense", (req, res) => {
  Expense
    .find() // Find all the expense
    .then(docs => {
      // If you find any, send back to client in json
      res.status(200).json({
          message: 'success',
          payload: docs
        })
        .catch(err => {
          res.status(500).json({
            message: err.message
          })
        })
    })
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`)
})