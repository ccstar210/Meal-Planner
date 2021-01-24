import axios from 'axios';
import { GET_PANTRY_ITEMS, ADD_PANTRY_ITEM, DELETE_PANTRY_ITEM, UPDATE_PANTRY_ITEM, ITEMS_PANTRY_LOADING, SEARCH_PANTRY } from './types';

export const getPantryItems = () => dispatch => {
    dispatch(setPantryItemsLoading());
    axios
        .get('/api/pantry')
        .then(res => 
            dispatch({
                type:  GET_PANTRY_ITEMS,
                payload: res.data
            })
        )
};

export const searchPantryItems = (input) => dispatch => {
    dispatch(setPantryItemsLoading());
    axios
        .get('/api/pantry')
        .then(res => 
            dispatch({
                type:  SEARCH_PANTRY,
                payload: {
                    pantryItems: res.data,
                    input: input,
            }})
        ) 
};

export const addPantryItem = fridgeItem => dispatch => {
    axios
        .post('/api/pantry', fridgeItem)
        .then(res => 
            dispatch({
                type: ADD_PANTRY_ITEM,
                payload: res.data
            })
        )
};

export const deletePantryItem = id => dispatch => {
    axios.delete(`/api/pantry/${id}`).then(res =>
        dispatch({
            type: DELETE_PANTRY_ITEM,
            payload: id
        })
    )
};

export const updatePantryItem = (id, pantryItem) => dispatch => {
    axios
        .patch(`/api/pantry/${id}`, pantryItem)
        .then(res =>
            dispatch({
                type: UPDATE_PANTRY_ITEM,
                payload: {id,
                name: res.data.name,
                quantity: res.data.quantity,
                unit: res.data.unit,
                expDate: res.data.expDate}
        })
    )
};



export const setPantryItemsLoading = () => {
    return {
        type: ITEMS_PANTRY_LOADING
    };
};

