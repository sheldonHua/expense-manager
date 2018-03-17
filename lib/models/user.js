const mongoose = require('mongoose');
const Schema = mongoose.schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
})