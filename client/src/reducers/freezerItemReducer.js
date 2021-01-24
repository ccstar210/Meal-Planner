import { GET_FREEZER_ITEMS, ADD_FREEZER_ITEM, DELETE_FREEZER_ITEM, UPDATE_FREEZER_ITEM, ITEMS_FREEZER_LOADING, SEARCH_FREEZER } from '../actions/types';

const initialState = {
    freezerItems: [],  
    loading: false
} 


export default function( state = initialState, action) {
    switch(action.type) {
        case GET_FREEZER_ITEMS:
            return {
                ...state, //cope of initial state, don't change the state
                freezerItems: action.payload, 
                loading: false
            };
        case SEARCH_FREEZER:
        return {
            ...state,
            freezerItems: action.payload.freezerItems.filter(item => item.name.toLowerCase().includes(action.payload.input.toLowerCase())),
            loading: false
        };
        case DELETE_FREEZER_ITEM:
            return {
                ...state,
                freezerItems: state.freezerItems.filter(item => item._id !== action.payload) //items
            };
        case UPDATE_FREEZER_ITEM:
            return {
                ...state,
                freezerItems: state.freezerItems.map(
                    (item) => item._id === action.payload.id ? {
                        ...item, name: action.payload.name, quantity: action.payload.quantity, unit: action.payload.unit, expDate: action.payload.expDate
                    }: item)
            };
        case ADD_FREEZER_ITEM:
            return {
                ...state,
                freezerItems: [ ...state.freezerItems, action.payload] //items
            };
        case ITEMS_FREEZER_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}