import axios from 'axios';
import { GET_GROCERY_ITEMS, ADD_GROCERY_ITEM, DELETE_GROCERY_ITEM, UPDATE_GROCERY_ITEM, ITEMS_GROCERY_LOADING } from './types';

export const getGroceryItems = () => dispatch => {
    dispatch(setGroceryItemsLoading());
    axios
        .get('/api/grocery')
        .then(res => 
            dispatch({
                type:  GET_GROCERY_ITEMS,
                payload: res.data
            })
        )
};

export const addGroceryItem = groceryItem => dispatch => {
    axios
        .post('/api/grocery', groceryItem)
        .then(res => 
            dispatch({
                type: ADD_GROCERY_ITEM,
                payload: res.data
            })
        )
};



export const deleteGroceryItem = id => dispatch => {
    axios.delete(`/api/grocery/${id}`).then(res =>
        dispatch({
            type: DELETE_GROCERY_ITEM,
            payload: id
        })
    )
};

export const updateGroceryItem = (id, groceryItem) => dispatch => {
    axios
        .patch(`/api/grocery/${id}`, groceryItem)
        .then(res =>
            dispatch({
                type: UPDATE_GROCERY_ITEM,
                payload: {id,
                item: res.data.item,
                checked: res.data.checked,
            }
        })
    )
};

export const setGroceryItemsLoading = () => {
    return {
        type: ITEMS_GROCERY_LOADING
    };
};

