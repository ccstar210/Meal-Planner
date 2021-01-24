import React, {Component} from 'react';
import { Input } from 'reactstrap';
import DisplayMealPlan from './DisplayMealPlan';

class MealPlan extends Component {
    state = {
        sundayBreakfast: '',
        sundayLunch: '',
        sundayDinner: '',
        sundaySnacks: '',
        mondayBreakfast: '',
        mondayLunch: '',
        mondayDinner: '',
        mondaySnacks: '',
        tuesdayBreakfast: '',
        tuesdayLunch: '',
        tuesdayDinner: '',
        tuesdaySnacks: '',
        wednesdayBreakfast: '',
        wednesdayLunch: '',
        wednesdayDinner: '',
        wednesdaySnacks: '',
        thursdayBreakfast: '',
        thursdayLunch: '',
        thursdayDinner: '',
        thursdaySnacks: '',
        fridayBreakfast: '',
        fridayLunch: '',
        fridayDinner: '',
        fridaySnacks: '',
        saturdayBreakfast: '',
        saturdayLunch: '',
        saturdayDinner: '',
        saturdaySnacks: '',
        status: 'future',
        mealplans: [],
    };

    /**
     * Sets the mealplans state to the selected week where the weeks are all the weeks in the mealplans database
     * @param {Object} e The event that is triggered when there is a click
     */
    handleWeek = e => {
        var mealplan = this.props.mealplans.filter(mealplan => mealplan.week === e.target.value);
        this.setState({
            mealplans: mealplan
        })
    }


    render() {
        this.props.upDateStatus(this.props.mealplans);

        return (
            <div>
                <Input className="mb-4" type="select" name="weekId" id="mealplanweeks"  defaultValue="" onClick={this.handleWeek}>
                    <option disabled value="">Select a week </option>
                    {this.props.mealplans.map((mealplan) => (
                        <option key={mealplan._id} value={mealplan.week}>{mealplan.week}</option>
                    ))}
                </Input> 
                
                {/* When component first loads, automatically display the week that has status of current, will display no meal plan if there is no current status */}
                {this.state.mealplans.length === 0
                    ? <div>
                        {this.props.mealplans.filter(mealplan => mealplan.status === 'current').map((mealplan) => (
                            <div key={mealplan._id}>
                                <h2 className="text-center">Week of {mealplan.week}</h2>
                                <DisplayMealPlan mealplan={mealplan} getWeekdayDate={this.props.getWeekdayDate}></DisplayMealPlan>
                            </div>
                        ))}  
                    </div>
                    //Display the selected mealplan
                    : <div>
                         {this.state.mealplans.map((mealplan) => (
                            <div key={mealplan._id}>
                                <h2 className="text-center">Week of {mealplan.week}</h2>
                                <DisplayMealPlan mealplan={mealplan} getWeekdayDate={this.props.getWeekdayDate}></DisplayMealPlan>
                            </div>
                        ))}  
                    </div>
                }
            </div> 
        );
    }
}

export default MealPlan;




