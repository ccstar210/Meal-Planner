const mongoose = require('mongoose');
// use Mongoose ODM
const Schema = mongoose.Schema;

// Create the GroceryList schema
const GroceryListSchema = new Schema({
    item: {
        type: String,
        required: true,
    },
    checked: {
        type: String,
    }
});

// "compile" schema into model
module.exports = GroceryList = mongoose.model('grocery', GroceryListSchema);