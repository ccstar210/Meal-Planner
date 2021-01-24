import * as actions from '../actions/types';

const initialState = {
    mealplans: [],  
    loading: false
} 



export default function( state = initialState, action) {
    switch(action.type) {
        case actions.GET_MEAL_PLANS:
            return {
                ...state,
                mealplans: action.payload, 
                loading: false
            };
        case actions.GET_MEAL_PLAN_BY_ID:
            return {
                ...state,
                mealplans: action.payload, 
                loading: false
            };
        case actions.DELETE_MEAL_PLAN:
            return {
                ...state,
                mealplans: state.mealplans.filter(mealplan => mealplan._id !== action.payload) 
            };
        case actions.UPDATE_MEAL_PLAN:
            return {
                ...state,
                mealplans: state.mealplans.map(
                    (mealplan) => mealplan._id === action.payload.id ? {
                        ...mealplan, week: action.payload.week, sunday: action.payload.sunday, monday: action.payload.monday, tuesday: action.payload.tuesday,
                        wednesday: action.payload.wednesday, thursday: action.payload.thursday, friday: action.payload.friday, saturday: action.payload.saturday, status: action.payload.status
                    }: mealplan)
            };
        case actions.ADD_MEAL_PLAN:
            return {
                ...state,
                mealplans: [ ...state.mealplans, action.payload] 
            };
        case actions.MEAL_PLAN_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}