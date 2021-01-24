import { combineReducers } from 'redux';
import pantryItemReducer from './pantryItemReducer';
import fridgeItemReducer from './fridgeItemReducer';
import freezerItemReducer from './freezerItemReducer';
import groceryItemReducer from './groceryItemReducer';
import recipeItemReducer from './recipeItemReducer';
import mealPlanItemReducer from './mealPlanItemReducer';

export default combineReducers({
    pantryItem: pantryItemReducer,
    fridgeItem: fridgeItemReducer,
    freezerItem: freezerItemReducer,
    groceryItem: groceryItemReducer,
    recipeItem: recipeItemReducer,
    mealPlanItem: mealPlanItemReducer
})