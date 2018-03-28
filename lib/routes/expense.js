const express = require('express')
const Router = express.Router
const router = Router()
const Expense = require('../models/expense');

// API end point
router.get("/get", (req, res) => {
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
  
  router.post('/post', (req, res) => {
    // create a new expense instance
    console.log(req.body);
    const expense = new Expense({ 
      selectedCategory: req.body.selectedCategory,
      description: req.body.description, // Get post data from body
      cost: req.body.cost,
      date: req.body.date
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
  
  router.delete('/delete/:id', (req, res) => {
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

module.exports = router

