const config = require('config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const app = express();
const path = require('path');
const router = require('./routes');
const PORT = process.env.PORT|| config.PORT;
const MONGODB_URI = process.env.MONGODB_URI || config.MONGODB_URI;

const Category = require('./models/category');

mongoose.connect(MONGODB_URI);

app.use(bodyParse());

app.use('/', express.static(
  path.join(__dirname, '../build'))
)

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

//send wild card path back to react route - to server 404 page
app.get('*', (req, res) => {
  res.sendFile(
    path.join(__dirname, '../build/index.html')
  );
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`)
})