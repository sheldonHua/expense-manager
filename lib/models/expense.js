const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    selectedCategory: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    cost: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    user: { type: Schema.Types.ObjectId, ref: "user" }
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
  