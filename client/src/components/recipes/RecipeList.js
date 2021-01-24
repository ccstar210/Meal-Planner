import React, { Component } from 'react';
import {  
    ListGroup,
    ListGroupItem,  
} from 'reactstrap';
import ItemsPagination from '../ItemsPagination';
import RecipeCard from './RecipeCard';


class RecipeList extends Component {
    // for pagination
    state = {
        currentPage: 1,
        itemsPerPage: 10
    }
    
    handleDelete = id => {
        this.props.deleteRecipe(id);
    }

    /**
     * Displays the correct group of recipes from the total recipes for pagination
     * @param   {Number} currentPage The current page number selected
     * @param   {Object} recipes     Array of objects of the recipes in the recipe database
     * @return  {Object}             Array of objects which is the section from recipes based on the page number selected and number of recipes to display per page
     */
    getCurrentItems = (currentPage, recipes) => {
        const indexOfLastItem = currentPage * this.state.itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - this.state.itemsPerPage;
        return recipes.slice(indexOfFirstItem, indexOfLastItem);
    }

    /**
     * Sets the currentPage number state based on the number clicked from pagination
     * @param   {Number} pageNumber The page number from pagination
     */
    paginate = (pageNumber) => this.setState({ currentPage: pageNumber });


    render() {
        return (
            <div>
                <div className="d-flex justify-content-center">
                    <ListGroup className="w-75">
                        {this.getCurrentItems(this.state.currentPage, this.props.recipes).map((recipe) => (
                            <ListGroupItem key={recipe._id} className="mt-3 parent recipe">
                                <RecipeCard
                                    recipe={recipe}
                                    updateRecipe={this.props.updateRecipe}
                                    handleDelete={this.handleDelete}> 
                                </RecipeCard>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </div>
                
                <ItemsPagination 
                    itemsPerPage={this.state.itemsPerPage} 
                    totalItems={this.props.recipes.length} 
                    paginate={this.paginate}
                    currentPage={this.state.currentPage}>
                </ItemsPagination>
            </div>
        );

    }
}

export default RecipeList;


