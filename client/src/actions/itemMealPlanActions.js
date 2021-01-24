import axios from 'axios';
import * as actions from './types';

export const getMealPlans = () => dispatch => {
    dispatch(setMealPlansLoading());
    axios
        .get('/api/mealplans')
        .then(res => 
            dispatch({
                type:  actions.GET_MEAL_PLANS,
                payload: res.data
            })
        )
};

export const getMealPlanById = id => dispatch => {
    dispatch(setMealPlansLoading());
    axios
        .get(`/api/mealplans/${id}`)
        .then(res => 
            dispatch({
                type:  actions.GET_MEAL_PLAN_BY_ID,
                payload: res.data
            })
        )
};

export const addMealPlan = mealplan => dispatch => {
    axios
        .post('/api/mealplans', mealplan)
        .then(res => 
            dispatch({
                type: actions.ADD_MEAL_PLAN,
                payload: res.data
            })
        )
};

export const deleteMealPlan = id => dispatch => {
    axios.delete(`/api/mealplans/${id}`).then(res =>
        dispatch({
            type: actions.DELETE_MEAL_PLAN,
            payload: id
        })
    )
};

export const updateMealPlan = (id, mealplan) => dispatch => {
    axios
        .patch(`/api/mealplans/${id}`, mealplan)
        .then(res =>
            dispatch({
                type: actions.UPDATE_MEAL_PLAN,
                payload: {id,
                week: res.data.week,
                sunday: res.data.sunday,
                monday: res.data.monday,
                tuesday: res.data.tuesday,
                wednesday: res.data.wednesday,
                thursday: res.data.thursday,
                friday: res.data.friday,
                saturday: res.data.saturday,
                status: res.data.status,
            }
        })
    )
};



export const setMealPlansLoading = () => {
    return {
        type: actions.MEAL_PLAN_LOADING
    };
};

