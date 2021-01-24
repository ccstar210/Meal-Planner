import React from 'react';

function RecipeFavorites(props) {
    return (
        <div className="text-center">
            <h1><span className="material-icons mainColorText mr-2">favorite</span>Favorites</h1>  
            {props.recipes.map((recipe) => (
                <h3 key={recipe._id}>
                    {recipe.favorite === true
                    ? (recipe.url !== ''
                    ? <a href={recipe.url} target="_blank" rel="noopener noreferrer" className="text-dark">{recipe.name}</a>
                    : <a href={`/uploads/${recipe.file}`} download className="text-dark">{recipe.name}</a>
                    )
                    : <span></span>      
                    }       
                </h3>
            ))}
        </div> 
    )
}

export default RecipeFavorites;



