import * as actions from '../actions/types';

const initialState = {
    recipes: [],  
    loading: false
} 



export default function( state = initialState, action) {
    switch(action.type) {
        case actions.GET_RECIPE_ITEMS:
            return {
                ...state,
                recipes: action.payload, 
                loading: false
            };
        case actions.SEARCH_RECIPE:
            return {
                ...state,
                recipes: action.payload.recipes.filter(recipe => recipe.name.toLowerCase().includes(action.payload.input.toLowerCase())),
                loading: false
            };
        case actions.FILTER_RECIPE_BY_TYPE:
            return {
                ...state,
                recipes: action.payload.type === 'All' ? action.payload.recipes : action.payload.recipes.filter(recipe => recipe.type === action.payload.type),
                loading: false
            };
        case actions.SORT_RECIPES:            
            return {
                ...state,
                recipes: action.payload.recipes.sort(
                    (a, b) => {
                        if(action.payload.category !== 'favorite') {
                            if(a[action.payload.category] > b[action.payload.category])
                                return 1;
                            else if(a[action.payload.category] < b[action.payload.category])
                                return -1;
                            else
                                return 0;
                        }
                        else {
                            if(a[action.payload.category] > b[action.payload.category])
                                return -1;
                            else if(a[action.payload.category] < b[action.payload.category])
                                return 1;
                            else
                                return 0;
                        }
                        
                    }
                ),
                loading: false
            };
        case actions.DELETE_RECIPE_ITEM:
            return {
                ...state,
                recipes: state.recipes.filter(recipe => recipe._id !== action.payload) 
            };
        case actions.UPDATE_RECIPE_ITEM:
            return {
                ...state,
                recipes: state.recipes.map(
                    (recipe) => recipe._id === action.payload.id ? {
                        ...recipe, name: action.payload.name, url: action.payload.url, file: action.payload.file, image: action.payload.image,
                        type: action.payload.type, notes: action.payload.notes, favorite: action.payload.favorite
                    }: recipe)
            };
        case actions.ADD_RECIPE_ITEM:
            return {
                ...state,
                recipes: [ ...state.recipes, action.payload] 
            };
        case actions.ITEMS_RECIPE_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}