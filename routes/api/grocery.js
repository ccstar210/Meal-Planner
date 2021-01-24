const express = require('express');
const router = express.Router();

// GroceryList Model
const Grocery = require('../../models/GroceryList');

// REST apis

// @route GET api/grocery
// @description Get all the grocery collection
// @access Public
router.get('/', (req, res) => {
    Grocery.find()
        .then(items => res.json(items))
        .catch(err => res.status(500).json({message: err.message }));
});


// @route POST api/grocery
// @description Add an item to the grocery collection
// @access Public
router.post('/', (req, res) => {

    const newItem = new Grocery({
        item: req.body.item,
        checked: req.body.checked
    });

    newItem.save()
    .then( item => res.json(item))
    .catch(err => res.status(400).json({message: err.message}));
});

// @route Patch api/grocery
// @description Update grocery item if checked or not
// @access Public
router.patch('/:id', async (req, res) => {
    function compare(item) {
        if (req.body.item != null) {
            item.name = req.body.item
        }
        if (req.body.checked != null) {
            item.checked = req.body.checked
        }
        return Promise.resolve();
    }
    
    Grocery.findById(req.params.id)
    .then(item => compare(item).then(item.save().then(item => res.json(item))))
    .catch(err => res.status(500).json({message: err.message}))
    
});


// @route DELETE api/grocery/:id
// @description Delete an item in the grocery collection
// @access Public
router.delete('/:id', (req, res) => {
    Grocery.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});


module.exports = router;