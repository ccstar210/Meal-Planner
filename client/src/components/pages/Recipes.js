import React, { Component } from 'react'
import { Spinner } from 'reactstrap';
import Header from '../layout/Header';
import AddRecipesModal from '../recipes/AddRecipesModal';
import RecipeFilter from '../recipes/RecipeFilter';
import RecipeSort from '../recipes/RecipeSort';
import RecipeSearch from '../recipes/RecipeSearch';
import RecipeList from '../recipes/RecipeList';
import RecipeFavorites from '../recipes/RecipeFavorites';
import { connect } from 'react-redux';
import { getRecipes, addRecipe, deleteRecipe, updateRecipe, searchRecipes, filterRecipes, sortRecipes } from '../../actions/itemRecipeActions';
import PropTypes from 'prop-types';


class Recipes extends Component {
    componentDidMount() {
        this.props.getRecipes();
    }

    render() {
        const { recipes, recipesLoading } = this.props.recipes; 

        return (
            <div>
                <div className="container-fluid">
                    <div className="row">       
                        <div className="col-lg-9">
                            <div className="container">
                                <Header title="Recipes" />
                                <div className="row justify-content-center">
                                    <div className="col-lg-3 align-self-center d-flex justify-content-center"><AddRecipesModal addRecipe={this.props.addRecipe}></AddRecipesModal></div>
                                    <div className="col-lg-3"><RecipeFilter filterRecipes={this.props.filterRecipes}></RecipeFilter></div>
                                    <div className="col-lg-3"><RecipeSort sortRecipes={this.props.sortRecipes}></RecipeSort></div>
                                </div>
                                <div className="row justify-content-center"><RecipeSearch searchRecipes={this.props.searchRecipes}></RecipeSearch></div>
                            </div>

                            {/* set loading feature, when fetching the recipes */}
                            {recipesLoading ? <div className="d-flex justify-content-center pt-4">
                                <Spinner color="dark" /></div> : 
                                <RecipeList
                                    recipes={recipes}
                                    updateRecipe={this.props.updateRecipe}
                                    deleteRecipe={this.props.deleteRecipe}>
                                </RecipeList> }
                        </div>
                        {/* Sidebar to display the favorited recipes for quick access */}
                        <div className="col-lg-3 secondaryColor">
                            <RecipeFavorites recipes={recipes}></RecipeFavorites>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
    
}

Recipes.propTypes = {
    getRecipes: PropTypes.func.isRequired,
    addRecipe: PropTypes.func.isRequired,
    deleteRecipe: PropTypes.func.isRequired,
    updateRecipe: PropTypes.func.isRequired,
    searchRecipes: PropTypes.func.isRequired,
    filterRecipes: PropTypes.func.isRequired,
    sortRecipes: PropTypes.func.isRequired,
    recipes: PropTypes.object.isRequired
}

//set state
const mapStateToProps = state => {
    return {
        recipes: state.recipeItem,
    }
}

//connect to component with redux
export default connect(
    mapStateToProps, 
    { getRecipes, addRecipe, deleteRecipe, updateRecipe, searchRecipes, filterRecipes, sortRecipes } 
) (Recipes);

