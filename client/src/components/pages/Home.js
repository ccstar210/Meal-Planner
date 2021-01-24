import React, { Component } from 'react';
import { Spinner } from 'reactstrap';
import Header from '../layout/Header';
import AddMealPlan from '../mealplan/AddMealPlan';
import UpdateMealPlan from '../mealplan/UpdateMealPlan';
import MealPlan from '../mealplan/MealPlan';
import { connect } from 'react-redux';
import { getMealPlans, getMealPlanById, addMealPlan, deleteMealPlan, updateMealPlan } from '../../actions/itemMealPlanActions';
import { getGroceryItems } from '../../actions/itemGroceryActions';
import { getRecipes } from '../../actions/itemRecipeActions';
import PropTypes from 'prop-types';
import moment from 'moment';

class Home extends Component {
    componentDidMount() {
        this.props.getMealPlans();
        this.props.getGroceryItems();
        this.props.getRecipes();
    }

    /**
     * Displays the week range begining with Sunday and ending with Saturday in the form MM/DD/YYYY-MM/DD/YYYY
     * @param   {Object} date A moment date object
     * @return  {String}      Weekly range
     */
    displayWeek = (date) => {
        //dates are mutable so need to make a copy of each
        //https://stackoverflow.com/questions/33633516/moment-js-startof-issue
        const from_date = moment(date).startOf('week');
        const to_date = moment(date).endOf('week');

        return from_date.format('MM/DD/YYYY') + '-' + to_date.format('MM/DD/YYYY');
    }

    /**
     * Determines the status (current, future, prev) of a mealplan week based on the current date
     * @param   {String} date The week range in MM/DD/YYYY-MM/DD/YYYY format
     * @return  {String}      Status (current, future, prev) indicating if the input is the same as the current week, after the current week, or before the current week
     */
    getStatus = (date) => {
        //get the last day of the week
        var weekEnd = moment(date.substring(11,21), 'MM/DD/YYYY').format('MM/DD/YYYY');
        var currentWeekEnd = moment().endOf('week').format('MM/DD/YYYY');
        if( weekEnd === currentWeekEnd)
            return "current";
        else if(currentWeekEnd < weekEnd)
            return "future";
        else
            return "prev";
    }

    /**
     * Updates the mealplan week status (prev, current, future) to the correct status based on the current week
     * @param   {Object} mealplans An object array of all the mealplans in the mealplans database
     * @return                     Void
     */
    upDateStatus = mealplans => {
        mealplans.forEach(mealplan => {
            //if the mealplan status in the database does not match the current status of the mealplan, then update the status in the database
            if(mealplan.status !== this.getStatus(mealplan.week)) {
                const newMealPlan = {
                    status: this.getStatus(mealplan.week)
                }
                this.props.updateMealPlan(mealplan._id, newMealPlan);
            }  
        });
        
    }

    /**
     * Determines the date in MM/DD of the week by the week number
     * @param   {String} week       Week in MM/DD/YYYY-MM/DD/YYYY format
     * @param   {Number} weekNum    A number indicating the number of the weekday ( Sunday is 0, Monday is 1 etc.)
     * @return  {String}            An empty string if the week input is also empty or a string in MM/DD for the corresponding weekday
     */
    getWeekdayDate = (week, weekNum) => {
        if(week === '')
            return '';
        return moment(week.substring(0,9), 'MM/DD/YYYY').day(weekNum).format('MM/DD');

    }

    render() {
        const { mealplans, mealplansLoading } = this.props.mealplans; 
        const { groceryItems } = this.props.groceryItems;
        const { recipes } = this.props.recipes;

        return (
            <div className="container-fluid">
                <div className="row">
                    {/* Sidebar which displays the current grocery list and recipe favorites for quick access */}
                    <div className="col-lg-2 secondaryColor" >
                        <h1>Grocery List</h1>
                        <ul>
                            {groceryItems.map(groceryItem => groceryItem.checked === 'false' ? <li key={groceryItem._id}>{groceryItem.item}</li> : <div key={groceryItem._id}></div>)}
                        </ul>
                        
                        <h1>Recipes</h1>
                        {recipes.map((recipe) => (
                            <div key={recipe._id}>
                                {recipe.favorite === true
                                ?  <a href={recipe.url} target="_blank" rel="noopener noreferrer" className="text-dark ml-2">{recipe.name}</a>
                                : <span></span>      
                                }       
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-10" >
                        <Header title="Meal Plan"></Header>
                        <div className="row justify-content-center mb-4">
                            <div className="col-lg-5 d-flex justify-content-around">
                                <AddMealPlan 
                                    mealplans={mealplans} 
                                    addMealPlan={this.props.addMealPlan}
                                    displayWeek={this.displayWeek}
                                    getStatus={this.getStatus}
                                    getWeekdayDate={this.getWeekdayDate}>
                                </AddMealPlan>
                                <UpdateMealPlan 
                                    updateMealPlan={this.props.updateMealPlan}
                                    deleteMealPlan={this.props.deleteMealPlan}
                                    mealplans={mealplans}
                                    getWeekdayDate={this.getWeekdayDate}>
                                </UpdateMealPlan>
                            </div>
                        </div>   

                        {/* set loading feature, when fetching the meal plans */}
                        {mealplansLoading ? <div className="d-flex justify-content-center pt-4">
                        <Spinner color="dark" /></div> : 
                        <MealPlan 
                            mealplans={mealplans} 
                            upDateStatus={this.upDateStatus}
                            getWeekdayDate={this.getWeekdayDate} >
                        </MealPlan> }           
                    </div>
                </div>
            </div>   
        )
    }
}

Home.propTypes = {
    getMealPlans: PropTypes.func.isRequired,
    getMealPlanById: PropTypes.func.isRequired,
    deleteMealPlan: PropTypes.func.isRequired,
    updateMealPlan: PropTypes.func.isRequired,
    mealplans: PropTypes.object.isRequired,
    getGroceryItems: PropTypes.func.isRequired,
    groceryItems: PropTypes.object.isRequired,
    getRecipes: PropTypes.func.isRequired,
    recipes: PropTypes.object.isRequired
}


//set state
const mapStateToProps = state => {
    return {
        mealplans: state.mealPlanItem,
        groceryItems: state.groceryItem,
        recipes: state.recipeItem
    }
}

//connect to component with redux
export default connect(
    mapStateToProps, 
    { getMealPlans, getMealPlanById, addMealPlan, deleteMealPlan, updateMealPlan, getGroceryItems, getRecipes } 
) (Home);

