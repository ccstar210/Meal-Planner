import React, { useState } from 'react';
import { 
    Form,
    Input,
    Button,
} from 'reactstrap';

//searches for a recipe based on name
const RecipeSearch = ({searchRecipes}) => {
    const [input, setInput] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        searchRecipes(input);
        setInput('');
    }

    return(
        <div className="w-75" >
            <Form className="input-group form-inline" onSubmit={handleSubmit}>
                <Input type='text' name="recipeInput" value={input} onChange={e => setInput(e.target.value)} placeholder='Search for a recipe...'></Input>
                <Button className="rounded-0" type='submit' onSubmit={handleSubmit}><span className="material-icons">search</span></Button>                
            </Form>
        </div>
        
    )
}

export default RecipeSearch;