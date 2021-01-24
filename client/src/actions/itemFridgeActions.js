import axios from 'axios';
import { GET_FRIDGE_ITEMS, ADD_FRIDGE_ITEM, DELETE_FRIDGE_ITEM, UPDATE_FRIDGE_ITEM, ITEMS_FRIDGE_LOADING, SEARCH_FRIDGE } from './types';

export const getFridgeItems = () => dispatch => {
    dispatch(setFridgeItemsLoading());
    axios
        .get('/api/fridge')
        .then(res => 
            dispatch({
                type:  GET_FRIDGE_ITEMS,
                payload: res.data
            })
        )
};

export const searchFridgeItems = (input) => dispatch => {
    dispatch(setFridgeItemsLoading());
    axios
        .get('/api/fridge')
        .then(res => 
            dispatch({
                type:  SEARCH_FRIDGE,
                payload: {
                    fridgeItems: res.data,
                    input: input,
            }})
        ) 
};

export const addFridgeItem = fridgeItem => dispatch => {
    axios
        .post('/api/fridge', fridgeItem)
        .then(res => 
            dispatch({
                type: ADD_FRIDGE_ITEM,
                payload: res.data
            })
        )
};

export const deleteFridgeItem = id => dispatch => {
    axios.delete(`/api/fridge/${id}`)
    .then(res =>
        dispatch({
            type: DELETE_FRIDGE_ITEM,
            payload: id
        })
    )
};


export const updateFridgeItem = (id, fridgeItem) => dispatch => {
    axios
        .patch(`/api/fridge/${id}`, fridgeItem)
        .then(res =>
            dispatch({
                type: UPDATE_FRIDGE_ITEM,
                payload: {id,
                name: res.data.name,
                quantity: res.data.quantity,
                unit: res.data.unit,
                expDate: res.data.expDate}
        })
    )
};




export const setFridgeItemsLoading = () => {
    return {
        type: ITEMS_FRIDGE_LOADING
    };
};