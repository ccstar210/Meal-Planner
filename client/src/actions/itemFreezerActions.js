import axios from 'axios';
import { GET_FREEZER_ITEMS, ADD_FREEZER_ITEM, DELETE_FREEZER_ITEM, UPDATE_FREEZER_ITEM, ITEMS_FREEZER_LOADING, SEARCH_FREEZER } from './types';

export const getFreezerItems = () => dispatch => {
    dispatch(setFreezerItemsLoading());
    axios
        .get('/api/freezer')
        .then(res => 
            dispatch({
                type:  GET_FREEZER_ITEMS,
                payload: res.data
            })
        )
};

export const searchFreezerItems = (input) => dispatch => {
    dispatch(setFreezerItemsLoading());
    axios
        .get('/api/freezer')
        .then(res => 
            dispatch({
                type:  SEARCH_FREEZER,
                payload: {
                    freezerItems: res.data,
                    input: input,
            }})
        ) 
};

export const addFreezerItem = freezerItem => dispatch => {
    axios
        .post('/api/freezer', freezerItem)
        .then(res => 
            dispatch({
                type: ADD_FREEZER_ITEM,
                payload: res.data
            })
        )
};

export const deleteFreezerItem = id => dispatch => {
    axios.delete(`/api/freezer/${id}`)
    .then(res =>
        dispatch({
            type: DELETE_FREEZER_ITEM,
            payload: id
        })
    )
};


export const updateFreezerItem = (id, freezerItem) => dispatch => {
    axios
        .patch(`/api/freezer/${id}`, freezerItem)
        .then(res =>
            dispatch({
                type: UPDATE_FREEZER_ITEM,
                payload: {id,
                name: res.data.name,
                quantity: res.data.quantity,
                unit: res.data.unit,
                expDate: res.data.expDate}
        })
    )
};




export const setFreezerItemsLoading = () => {
    return {
        type: ITEMS_FREEZER_LOADING
    };
};