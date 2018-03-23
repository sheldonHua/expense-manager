const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');

const PORT = 8080;
const Expense = require('./models/expense');
const Category = require('./models/category');

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

app.get("/category", (req, res) => {
  Category
    .find()
    .then(docs => {
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
    selectedCategory: req.body.selectedCategory,
    description: req.body.description, // Get post data from body
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

const createCategory = () => {
  const category = new Category({
    category: ['Groceries', 'Internet', 'Insurance', 'Entertainment', 'Electronic', 'Hydro', 'Water', 'Home Heating', 'Vacation', 'Restaurant' ]
  })

  category
    .save()
    .then(doc => {
      console.log(doc);
  })
  .catch(err => {
    console.log(err.message);
  })
}
createCategory();



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`)
})