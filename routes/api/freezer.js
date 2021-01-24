// load express module
const express = require('express');

// group route handlers with router for freezer
const router = express.Router();

// FreezerInventory Model
const Freezer = require('../../models/FreezerInventory');

// @route GET api/freezer
// @description Get all items in the freezer collection
// @access Public
router.get('/', (req, res) => {
    Freezer.find()
        .then(items => res.json(items))
        .catch(err => res.status(500).json({message: err.message }));
});


// @route POST api/freezer
// @description Add an item to freezer collection
// @access Public
router.post('/', (req, res) => {
    const newItem = new Freezer({
        name: req.body.name,
        quantity: req.body.quantity,
        unit: req.body.unit,
        expDate: req.body.expDate
    });

    newItem.save()
    .then( item => res.json(item))
    .catch(err => res.status(400).json({message: err.message}));
});

// @route Patch api/freezer
// @description Update an item in the freezer collection
// @access Public
router.patch('/:id', async (req, res) => {
    function compare(item) {
        if (req.body.name != null) {
            item.name = req.body.name
        }
        if (req.body.quantity != null) {
            item.quantity = req.body.quantity
        }
        if (req.body.unit != null) {
            item.unit = req.body.unit
        }
        if (req.body.expDate != null) {
            item.expDate = req.body.expDate
        }
        return Promise.resolve();
    }
    
    Freezer.findById(req.params.id)
    .then(item => compare(item).then(item.save().then(item => res.json(item))))
    .catch(err => res.status(500).json({message: err.message}))
    
});

// @route DELETE api/freezer/:id
// @description Delete an item in the freezer collection
// @access Public
router.delete('/:id', (req, res) => {
    Freezer.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

// Export the Router object so can be used in server.js
module.exports = router;