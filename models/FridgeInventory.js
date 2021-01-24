const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the FridgeInventory schema
const FridgeInventorySchema = new Schema({
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

module.exports = FridgeInventory = mongoose.model('fridge', FridgeInventorySchema);