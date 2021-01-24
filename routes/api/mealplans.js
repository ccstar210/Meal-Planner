const express = require('express');
const router = express.Router();

// MealPlans Model
const MealPlans = require('../../models/MealPlans');

// REST apis

// @route GET api/mealplans
// @description Get all meal plans in mealplans collection
// @access Public
router.get('/', (req, res) => {
    MealPlans.find()
        .then(items => res.json(items))
        .catch(err => res.status(500).json({message: err.message }));
});

// @route GET api/mealplans/:id
// @description Get a specific meal plan based on id
// @access Public
router.get('/:id', (req, res) => {
    MealPlans.findById(req.params.id)
        .then(mealplan => res.json(mealplan))
        .catch(err => res.status(500).json({message: err.message}));
});

// @route POST api/mealplans
// @description Add a mealplan in mealplans collection
// @access Public
router.post('/', (req, res) => {
    const newMealPlan = new MealPlans({
        week: req.body.week,
        sunday: req.body.sunday,
        monday: req.body.monday,
        tuesday: req.body.tuesday,
        wednesday: req.body.wednesday,
        thursday: req.body.thursday,
        friday: req.body.friday,
        saturday: req.body.saturday,
        status: req.body.status,
    });

    newMealPlan.save()
    .then( item => res.json(item))
    .catch(err => res.status(400).json({message: err.message}));
});

// @route Patch api/mealplans
// @description Update a mealplan in mealplans collection
// @access Public
router.patch('/:id', async (req, res) => {
    function compare(mealplan) {
        if (req.body.sunday != null) {
            mealplan.sunday = req.body.sunday
        }
        if (req.body.monday != null) {
            mealplan.monday = req.body.monday
        }
        if (req.body.tuesday != null) {
            mealplan.tuesday = req.body.tuesday
        }
        if (req.body.wednesday != null) {
            mealplan.wednesday = req.body.wednesday
        }
        if (req.body.thursday != null) {
            mealplan.thursday = req.body.thursday
        }
        if (req.body.friday != null) {
            mealplan.friday = req.body.friday
        }
        if (req.body.saturday != null) {
            mealplan.saturday = req.body.saturday
        }
        if (req.body.status != null) {
            mealplan.status = req.body.status
        }
        return Promise.resolve();
    }
    
    MealPlans.findById(req.params.id)
    .then(item => compare(item).then(item.save().then(item => res.json(item))))
    .catch(err => res.status(500).json({message: err.message}))
    
});

// @route DELETE api/mealplans/:id
// @description Delete an item in mealplans collection
// @access Public
router.delete('/:id', (req, res) => {
    MealPlans.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});


module.exports = router;