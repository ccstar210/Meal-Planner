import React from 'react';
import {
	FormGroup,
	Label,
	Input
} from 'reactstrap';

const RecipeSort = ({sortRecipes}) => {
	const handleClick = e => {
		sortRecipes(e.target.value);
	}
    
    return(
        <div >
            <FormGroup>
				<Label for="recipeSort">Sort By</Label>
				<Input onClick={handleClick} type="select" name="sort" id="recipeSort" defaultValue="">
					<option disabled value="">Sort by </option>
					<option value="name">Recipe Name</option>
					<option value="type">Type</option>
					<option value="favorite">Favorites</option>
				</Input>
			</FormGroup>
        </div>
    )
}

export default RecipeSort;
