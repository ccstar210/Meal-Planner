const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the Recipes schema
const RecipesSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
    },
    file: {
        type: String,
    },
    image: {
        type: String,
    },
    type: {
        type: String,
        enum: ['Breakfast', 'Lunch/Dinner', 'Dessert', 'Snack', 'Side Dish', 'Other'],
        required: true
    },
    notes: {
        type: String
    },
    favorite: {
        type: Boolean
    }
});

module.exports = Recipes = mongoose.model('recipe', RecipesSchema);