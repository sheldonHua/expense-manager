const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const app = express();
const router = require('./routes')
const PORT = 8080;

const Category = require('./models/category');

const uri = 'mongodb://localhost:27017/expenseManager';
mongoose.connect(uri);

app.use(bodyParse());

app.use(router);

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