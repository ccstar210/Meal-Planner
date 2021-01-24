import { GET_FRIDGE_ITEMS, ADD_FRIDGE_ITEM, DELETE_FRIDGE_ITEM, UPDATE_FRIDGE_ITEM, ITEMS_FRIDGE_LOADING, SEARCH_FRIDGE } from '../actions/types';

const initialState = {
    fridgeItems: [], //items
    loading: false
} 


export default function( state = initialState, action) {
    switch(action.type) {
        case GET_FRIDGE_ITEMS:
            return {
                ...state,
                fridgeItems: action.payload, 
                loading: false
            };
        case SEARCH_FRIDGE:
            return {
                ...state,
                fridgeItems: action.payload.fridgeItems.filter(item => item.name.toLowerCase().includes(action.payload.input.toLowerCase())),
                loading: false
            };
        case DELETE_FRIDGE_ITEM:
            return {
                ...state,
                fridgeItems: state.fridgeItems.filter(item => item._id !== action.payload) 
            };
        case UPDATE_FRIDGE_ITEM:
            return {
                ...state,
                fridgeItems: state.fridgeItems.map(
                    (item) => item._id === action.payload.id ? {
                        ...item, name: action.payload.name, quantity: action.payload.quantity, unit: action.payload.unit, expDate: action.payload.expDate
                    }: item)
            };
        case ADD_FRIDGE_ITEM:
            return {
                ...state,
                fridgeItems: [ ...state.fridgeItems, action.payload] 
            };
        case ITEMS_FRIDGE_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};
