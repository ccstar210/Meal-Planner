import React from 'react';
import { 
    FormGroup,
	Input,
	Label,	
} from 'reactstrap';


const RecipeFilter = ({filterRecipes}) => {

	const handleClick = e => {
		filterRecipes(e.target.value);
	}
	
    return(
        <div >
            <FormGroup>
				<Label for="recipeTypeFilter">Type</Label>
				<Input onClick={handleClick} type="select" name="type" id="recipeTypeFilter" defaultValue="All">
					<option disabled value="All">Select a type... </option>
					<option value="All">All</option>
					<option value="Breakfast">Breakfast</option>
					<option value="Lunch/Dinner">Lunch/Dinner</option>
					<option value="Dessert">Dessert</option>
					<option value="Snack">Snack</option>
					<option value="Side Dish">Side Dish</option>
					<option value="Other">Other</option>
				</Input>
			</FormGroup>
        </div>
    )
}

export default RecipeFilter;
