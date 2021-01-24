const mongoose = require('mongoose');
// use Mongoose ODM
const Schema = mongoose.Schema;

// Create the PantryInventory schema
const PantryInventorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
    },
    unit: {
        type: String,
    },
    expDate: {
        type: Date,
    }
});

// "compile" schema into model
module.exports = PantryInventory = mongoose.model('pantry', PantryInventorySchema);