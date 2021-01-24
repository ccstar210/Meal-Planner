import React from 'react';
import UpdateRecipeModal from './UpdateRecipeModal';

function RecipeCard({recipe, updateRecipe, handleDelete}) {
        /**
         * Updates the favorite field in the recipe database based on whether the heart icon is selected or not
         * @param   {Object} recipe Recipe object
         */
        const handleFavorite = recipe => {
            //update the heart icon based on if the "favorite" value is true or false
            var newValue;
            newValue = (recipe.favorite === true) ? false : true
            const updatedRecipe = {
                favorite: newValue,
            }        
            // Update recipe in the recipe database with updateRecipe action
            updateRecipe(recipe._id, updatedRecipe);
        }
    return (

        <div>
            {recipe.image === ''
            ? <img alt={recipe.name} src="./images/food.jpg" className="float-left mr-4 "></img> 
            : <img alt={recipe.name} src={`/uploads/${recipe.image}`} className="float-left mr-4"></img> 
            }
            <div>
                {/* Displays recipe name which will link to recipe website if there is an url or downloads a file */}
                {recipe.url !== ''
                ? <a href={recipe.url} target="_blank" rel="noopener noreferrer" className="linkStyleBlack">{recipe.name}</a>
                : <a href={`/uploads/${recipe.file}`} download className="linkStyleBlack">{recipe.name}</a>
                }

                {/* If the recipe is favorited, the heart icon will be filled in, else it will just have a border */}
                {recipe.favorite === false
                ?  <span id={"unfavorite" + recipe._id} className="material-icons float-right mainColorText" onClick={ () => handleFavorite(recipe)}>favorite_border</span> 
                :  <span id={"favorite" + recipe._id} className="material-icons float-right mainColorText" onClick={() => handleFavorite(recipe)}>favorite</span> 
                }

                <p>{recipe.type}</p>
                <p className="pb-4">{recipe.notes}</p>
            </div>

            <UpdateRecipeModal 
                recipe={recipe}  
                updateRecipe={updateRecipe}>
            </UpdateRecipeModal>

            {/* Delete button (x) */}
            <span className="material-icons childRight" onClick={() => handleDelete(recipe._id)}  >clear</span>
            
        </div>
    )
}

export default RecipeCard;
