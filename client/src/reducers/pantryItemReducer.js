import { GET_PANTRY_ITEMS, ADD_PANTRY_ITEM, DELETE_PANTRY_ITEM, UPDATE_PANTRY_ITEM, ITEMS_PANTRY_LOADING, SEARCH_PANTRY } from '../actions/types';

const initialState = {
    pantryItems: [],  
    loading: false
} 


export default function( state = initialState, action) {
    switch(action.type) {
        case GET_PANTRY_ITEMS:
            return {
                ...state,
                pantryItems: action.payload, 
                loading: false
            };
        case SEARCH_PANTRY:
            return {
                ...state,
                pantryItems: action.payload.pantryItems.filter(item => item.name.toLowerCase().includes(action.payload.input.toLowerCase())),
                loading: false
            };
        case DELETE_PANTRY_ITEM:
            return {
                ...state,
                pantryItems: state.pantryItems.filter(item => item._id !== action.payload) //items
            };
        case UPDATE_PANTRY_ITEM:
            return {
                ...state,
                pantryItems: state.pantryItems.map(
                    (item) => item._id === action.payload.id ? {
                        ...item, name: action.payload.name, quantity: action.payload.quantity, unit: action.payload.unit, expDate: action.payload.expDate
                    }: item)
            };
        case ADD_PANTRY_ITEM:
            return {
                ...state,
                pantryItems: [ ...state.pantryItems, action.payload] //items
            };
        case ITEMS_PANTRY_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}