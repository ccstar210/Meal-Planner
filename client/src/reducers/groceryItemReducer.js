import { GET_GROCERY_ITEMS, ADD_GROCERY_ITEM, DELETE_GROCERY_ITEM, UPDATE_GROCERY_ITEM, ITEMS_GROCERY_LOADING } from '../actions/types';

const initialState = {
    groceryItems: [],  
    loading: false
} 


export default function( state = initialState, action) {
    switch(action.type) {
        case GET_GROCERY_ITEMS:
            return {
                ...state,
                groceryItems: action.payload, 
                loading: false
            };
        case DELETE_GROCERY_ITEM:
            return {
                ...state,
                groceryItems: state.groceryItems.filter(item => item._id !== action.payload) //items
            };
        case UPDATE_GROCERY_ITEM:
            return {
                ...state,
                groceryItems: state.groceryItems.map(
                    (item) => item._id === action.payload.id ? {
                        ...item, item: action.payload.item, checked: action.payload.checked, 
                    }: item)
            };
        case ADD_GROCERY_ITEM:
            return {
                ...state,
                groceryItems: [ ...state.groceryItems, action.payload] //items
            };
        case ITEMS_GROCERY_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}