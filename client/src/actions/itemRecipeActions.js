import axios from 'axios';
import * as actions from './types';

export const getRecipes = () => dispatch => {
    dispatch(setRecipesLoading());
    axios
        .get('/api/recipes')
        .then(res => 
            dispatch({
                type:  actions.GET_RECIPE_ITEMS,
                payload: res.data
            })
        )
};

export const searchRecipes = (input) => dispatch => {
    dispatch(setRecipesLoading());
    axios
        .get('/api/recipes')
        .then(res => 
            dispatch({
                type:  actions.SEARCH_RECIPE,
                payload: {
                    recipes: res.data,
                    input: input,
            }})
        ) 
};


export const filterRecipes = (type) => dispatch => {
    dispatch(setRecipesLoading());
    axios
        .get('/api/recipes')
        .then(res =>
            dispatch({
                type: actions.FILTER_RECIPE_BY_TYPE,
                payload: {
                    recipes: res.data,
                    type: type
            }})
        )    
}

export const sortRecipes = (category) => dispatch => {
    dispatch(setRecipesLoading());
    axios
        .get('/api/recipes')
        .then(res =>
            dispatch({
                type: actions.SORT_RECIPES,
                payload: {
                    recipes: res.data,
                    category: category
            }})
        )  
}
export const addRecipe = recipe => dispatch => {
    axios
        .post('/api/recipes', recipe)
        .then(res => 
            dispatch({
                type: actions.ADD_RECIPE_ITEM,
                payload: res.data
            })
        )
};

export const deleteRecipe = id => dispatch => {
    axios.delete(`/api/recipes/${id}`).then(res =>
        dispatch({
            type: actions.DELETE_RECIPE_ITEM,
            payload: id
        })
    )
};

export const updateRecipe = (id, recipe) => dispatch => {
    axios
        .patch(`/api/recipes/${id}`, recipe)
        .then(res =>
            dispatch({
                type: actions.UPDATE_RECIPE_ITEM,
                payload: {id,
                    name: res.data.name,
                    url: res.data.url,
                    file: res.data.file,
                    image: res.data.image,
                    type: res.data.type,
                    notes: res.data.notes,
                    favorite: res.data.favorite}
        })
    )
};



export const setRecipesLoading = () => {
    return {
        type: actions.ITEMS_RECIPE_LOADING
    };
};

