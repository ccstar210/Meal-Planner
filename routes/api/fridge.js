const express = require('express');
const router = express.Router();

// FridgeInventory Model
const Fridge = require('../../models/FridgeInventory');


// @route GET api/fridge
// @description Get all items in fridge collection
// @access Public
router.get('/', async (req, res) => {
    try {
        const fridge = await Fridge.find()
        res.json(fridge)
    } catch (err) {
        res.status(500).json({message: err.message })
    }

});


// @route POST api/fridge
// @description Add an item in fridge collection
// @access Public
router.post('/', async (req, res) => {
    const newItem = new Fridge({
        name: req.body.name,
        quantity: req.body.quantity,
        unit: req.body.unit,
        expDate: req.body.expDate
    })
    try {
        const newFridge = await newItem.save()
        res.status(201).json(newFridge)
    } catch(err) {
        res.status(400).json({message: err.message})
    }

});

// @route Patch api/fridge
// @description Update an item in fridge collection
// @access Public
router.patch('/:id', getFridge, async (req, res) => {
    if (req.body.name != null) {
        res.fridgeItem.name = req.body.name
    }
    if (req.body.quantity != null) {
        res.fridgeItem.quantity = req.body.quantity
    }
    if (req.body.unit != null) {
        res.fridgeItem.unit = req.body.unit
    }
    if (req.body.expDate != null) {
        res.fridgeItem.expDate = req.body.expDate
    }

    try {
        const updateFridge = await res.fridgeItem.save()
        res.json(updateFridge)
    } catch (err) {
        res.status(500).json({message: err.message})
        
    }
});


// @route DELETE api/fridge/:id
// @description Delete an item in fridge collection
// @access Public
router.delete('/:id', getFridge, async (req, res) => {
    try {
        await res.fridgeItem.remove()
        res.json({ message: "Deleted item" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

// helper function, middleware function
async function getFridge(req,res,next) {
    let fridgeItem
    try {
        fridgeItem = await Fridge.findById(req.params.id)
        if (fridgeItem == null) {
            return res.status(404).json({message: 'Cannot find the item'})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
    res.fridgeItem = fridgeItem
    next()
}


module.exports = router;