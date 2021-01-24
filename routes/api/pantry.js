const express = require('express');
const router = express.Router();

// PantryInventory Model
const Pantry = require('../../models/PantryInventory');

// REST apis

// @route GET api/pantry
// @description Get all items in pantry collection
// @access Public
router.get('/', (req, res) => {
    Pantry.find()
        .then(items => res.json(items))
        .catch(err => res.status(500).json({message: err.message }));
});


// @route POST api/pantry
// @description Add an item in pantry collection
// @access Public
router.post('/', (req, res) => {
    const newItem = new Pantry({
        name: req.body.name,
        quantity: req.body.quantity,
        unit: req.body.unit,
        expDate: req.body.expDate
    });

    newItem.save()
    .then( item => res.json(item))
    .catch(err => res.status(400).json({message: err.message}));
});

// @route Patch api/pantry
// @description Update an item in pantry collection
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
    
    Pantry.findById(req.params.id)
    .then(item => compare(item).then(item.save().then(item => res.json(item))))
    .catch(err => res.status(500).json({message: err.message}))
    
});

// @route DELETE api/pantry/:id
// @description Delete an item in pantry collection
// @access Public
router.delete('/:id', (req, res) => {
    Pantry.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});


module.exports = router;