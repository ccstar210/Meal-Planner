const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the FreezerInventory schema
const FreezerInventorySchema = new Schema({
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

module.exports = FreezerInventory = mongoose.model('freezer', FreezerInventorySchema);