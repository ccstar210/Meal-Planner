const mongoose = require('mongoose');
// use Mongoose ODM
const Schema = mongoose.Schema;

const WeekDaySchema = new Schema({
    breakfast: {type: String},
    lunch: {type: String},
    dinner: {type: String},
    snacks: {type: String}
});
// Create the MealPlan schema
const MealPlansSchema = new Schema({
    week: {
        type: String,
        required: true,
        unique: true
    },
    sunday: {
        type: [WeekDaySchema],
        required: true
    },
    monday: {
        type: [WeekDaySchema],
        required: true
    },
    tuesday: {
        type: [WeekDaySchema],
        required: true
    },
    wednesday: {
        type: [WeekDaySchema],
        required: true
    },
    thursday: {
        type: [WeekDaySchema],
        required: true
    },
    friday: {
        type: [WeekDaySchema],
        required: true
    },
    saturday: {
        type: [WeekDaySchema],
        required: true
    },
    status: {
        type: String,
        enum: ['prev', 'current', 'future'],
        required: true
    }

});

// "compile" schema into model
module.exports = MealPlans = mongoose.model('mealplan', MealPlansSchema);