import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    Input,
    Table
} from 'reactstrap';


class UpdateMealPlan extends Component {

    state = {
        modal: false,
        button: "edit",
        weekId: '',
        week: '',
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
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            }
        );
    };

    /**
     * Sets the mealplans state to the selected week where the weeks are all the weeks in the mealplans database
     * Displays the meal plan information of the selected week based on the id
     * @param {Object} e The event that is triggered when there is a click
     */
    handleWeek = (e) => {
        //get the mongoDB id of the week selected and set the state
        this.setState({
            [e.target.name]: e.target.value,
        });
        
        //first option is the dummy option "Select a week" so has a value of ""
        if(e.target.value !== "") {
            const mealplan = this.props.mealplans.filter(mealplan => mealplan._id === e.target.value);
            //make a copy of the mealplan object
            const mp = JSON.parse(JSON.stringify(mealplan[0]));
            //set the state, so the proper information will be displayed
            this.setState({
                week: mp.week,
                sundayBreakfast: mp.sunday[0].breakfast,
                sundayLunch: mp.sunday[0].lunch,
                sundayDinner: mp.sunday[0].dinner,
                sundaySnacks: mp.sunday[0].snacks,
                mondayBreakfast: mp.monday[0].breakfast,
                mondayLunch: mp.monday[0].lunch,
                mondayDinner: mp.monday[0].dinner,
                mondaySnacks: mp.monday[0].snacks,
                tuesdayBreakfast: mp.tuesday[0].breakfast,
                tuesdayLunch: mp.tuesday[0].lunch,
                tuesdayDinner: mp.tuesday[0].dinner,
                tuesdaySnacks: mp.tuesday[0].snacks,
                wednesdayBreakfast: mp.wednesday[0].breakfast,
                wednesdayLunch: mp.wednesday[0].lunch,
                wednesdayDinner: mp.wednesday[0].dinner,
                wednesdaySnacks: mp.wednesday[0].snacks,
                thursdayBreakfast: mp.thursday[0].breakfast,
                thursdayLunch: mp.thursday[0].lunch,
                thursdayDinner: mp.thursday[0].dinner,
                thursdaySnacks: mp.thursday[0].snacks,
                fridayBreakfast: mp.friday[0].breakfast,
                fridayLunch: mp.friday[0].lunch,
                fridayDinner: mp.friday[0].dinner,
                fridaySnacks: mp.friday[0].snacks,
                saturdayBreakfast: mp.saturday[0].breakfast,
                saturdayLunch: mp.saturday[0].lunch,
                saturdayDinner: mp.saturday[0].dinner,
                saturdaySnacks: mp.saturday[0].snacks,
            });
        }
    }

    /**
     * Updates the mealplan in the database or deletes the mealplan depending on which button is selected
     * @param {Object} e The event that is triggered when there is a click
     */
    onSubmit = (e) => {
        e.preventDefault();
        //update the mealplan based on the state values
        if(this.state.button === "edit") {
            const newMealPlan = {
                sunday: [{
                    breakfast: this.state.sundayBreakfast,
                    lunch: this.state.sundayLunch,
                    dinner: this.state.sundayDinner,
                    snacks: this.state.sundaySnacks
                }],
                monday: [{
                    breakfast: this.state.mondayBreakfast,
                    lunch: this.state.mondayLunch,
                    dinner: this.state.mondayDinner,
                    snacks: this.state.mondaySnacks
                }],
                tuesday: [{
                    breakfast: this.state.tuesdayBreakfast,
                    lunch: this.state.tuesdayLunch,
                    dinner: this.state.tuesdayDinner,
                    snacks: this.state.tuesdaySnacks
                }],
                wednesday: [{
                    breakfast: this.state.wednesdayBreakfast,
                    lunch: this.state.wednesdayLunch,
                    dinner: this.state.wednesdayDinner,
                    snacks: this.state.wednesdaySnacks
                }],
                thursday: [{
                    breakfast: this.state.thursdayBreakfast,
                    lunch: this.state.thursdayLunch,
                    dinner: this.state.thursdayDinner,
                    snacks: this.state.thursdaySnacks
                }],
                friday: [{
                    breakfast: this.state.fridayBreakfast,
                    lunch: this.state.fridayLunch,
                    dinner: this.state.fridayDinner,
                    snacks: this.state.fridaySnacks
                }],
                saturday: [{
                    breakfast: this.state.saturdayBreakfast,
                    lunch: this.state.saturdayLunch,
                    dinner: this.state.saturdayDinner,
                    snacks: this.state.saturdaySnacks
                }],                    
            }
        
            // Update mealplan with updateMealPlan action
            this.props.updateMealPlan(this.state.weekId, newMealPlan); 
        }
        
        else {
            //delete the mealplan
            this.props.deleteMealPlan(this.state.weekId);
        }
                
        //resetState to blank values
        this.resetState();

        // Close modal
        this.toggle();
        }

        resetState = () => {
            this.setState({
                modal: false,
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
            });
        }

        toggle = () => {
            this.setState({
                modal: !this.state.modal
            });
        };

    render() {        
        return(
            <div>
                <Button
                    onClick={this.toggle}>
                    <span className="material-icons mr-2">create</span>Edit
                </Button>
                <Modal
                    size="xl"
                    isOpen={this.state.modal}
                    toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Update Meal Plan</ModalHeader>
                    <ModalBody>                
                        <Form onSubmit={this.onSubmit}>
                            <Input className="mb-4" type="select" name="weekId" id="mealplanweeks" defaultValue="" onClick={this.handleWeek}>
                                <option value="" disabled>Select a week</option>
                                {this.props.mealplans.map((mealplan) => (
                                    <option key={mealplan._id} value={mealplan._id}>{mealplan.week}</option>
                                ))}
                            </Input>                            
                            <Table >
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Breakfast</th>
                                        <th>Lunch</th>
                                        <th>Dinner</th>
                                        <th>Snack</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Sunday <br></br> {this.props.getWeekdayDate(this.state.week,0)} </th>
                                        <td><Input type="textarea" name="sundayBreakfast" id="sundayBreakfast" onChange={this.onChange} value={this.state.sundayBreakfast}/></td>
                                        <td><Input type="textarea" name="sundayLunch" id="sundayLunch" onChange={this.onChange} value={this.state.sundayLunch}/></td>
                                        <td><Input type="textarea" name="sundayDinner" id="sundayDinner" onChange={this.onChange} value={this.state.sundayDinner}/></td>
                                        <td><Input type="textarea" name="sundaySnacks" id="sundaySnacks" onChange={this.onChange} value={this.state.sundaySnacks}/></td>
                                    </tr>
                                    <tr>
                                        <th>Monday <br></br> {this.props.getWeekdayDate(this.state.week,1)} </th>
                                        <td><Input type="textarea" name="mondayBreakfast" id="mondayBreakfast" onChange={this.onChange} value={this.state.mondayBreakfast}/></td>
                                        <td><Input type="textarea" name="mondayLunch" id="mondayLunch" onChange={this.onChange} value={this.state.mondayLunch}/></td>
                                        <td><Input type="textarea" name="mondayDinner" id="mondayDinner" onChange={this.onChange} value={this.state.mondayDinner}/></td>
                                        <td><Input type="textarea" name="mondaySnacks" id="mondaySnacks" onChange={this.onChange} value={this.state.mondaySnacks}/></td>
                                    </tr>
                                    <tr>
                                        <th>Tuesday <br></br> {this.props.getWeekdayDate(this.state.week,2)} </th>
                                        <td><Input type="textarea" name="tuesdayBreakfast" id="tuesdayBreakfast" onChange={this.onChange} value={this.state.tuesdayBreakfast}/></td>
                                        <td><Input type="textarea" name="tuesdayLunch" id="tuesdayLunch" onChange={this.onChange} value={this.state.tuesdayLunch}/></td>
                                        <td><Input type="textarea" name="tuesdayDinner" id="tuesdayDinner" onChange={this.onChange} value={this.state.tuesdayDinner}/></td>
                                        <td><Input type="textarea" name="tuesdaySnacks" id="tuesdaySnacks" onChange={this.onChange} value={this.state.tuesdaySnacks}/></td>
                                    </tr>
                                    <tr>
                                        <th>Wednesday <br></br> {this.props.getWeekdayDate(this.state.week,3)} </th>
                                        <td><Input type="textarea" name="wednesdayBreakfast" id="wednesdayBreakfast" onChange={this.onChange} value={this.state.wednesdayBreakfast}/></td>
                                        <td><Input type="textarea" name="wednesdayLunch" id="wednesdayLunch" onChange={this.onChange} value={this.state.wednesdayLunch}/></td>
                                        <td><Input type="textarea" name="wednesdayDinner" id="wednesdayDinner" onChange={this.onChange} value={this.state.wednesdayDinner}/></td>
                                        <td><Input type="textarea" name="wednesdaySnacks" id="wednesdaySnacks" onChange={this.onChange} value={this.state.wednesdaySnacks}/></td>
                                    </tr>
                                    <tr>
                                        <th>Thursday <br></br> {this.props.getWeekdayDate(this.state.week,4)}</th>
                                        <td><Input type="textarea" name="thursdayBreakfast" id="thursdayBreakfast" onChange={this.onChange} value={this.state.thursdayBreakfast}/></td>
                                        <td><Input type="textarea" name="thursdayLunch" id="thursdayLunch" onChange={this.onChange} value={this.state.thursdayLunch}/></td>
                                        <td><Input type="textarea" name="thursdayDinner" id="thursdayDinner" onChange={this.onChange} value={this.state.thursdayDinner}/></td>
                                        <td><Input type="textarea" name="thursdaySnacks" id="thursdaySnacks" onChange={this.onChange} value={this.state.wednesdaySnacks}/></td>
                                    </tr>
                                    <tr>
                                        <th>Friday <br></br> {this.props.getWeekdayDate(this.state.week,5)} </th>
                                        <td><Input type="textarea" name="fridayBreakfast" id="fridayBreakfast" onChange={this.onChange} value={this.state.fridayBreakfast}/></td>
                                        <td><Input type="textarea" name="fridayLunch" id="fridayLunch" onChange={this.onChange} value={this.state.fridayLunch}/></td>
                                        <td><Input type="textarea" name="fridayDinner" id="fridayDinner" onChange={this.onChange} value={this.state.fridayDinner}/></td>
                                        <td><Input type="textarea" name="fridaySnacks" id="fridaySnacks" onChange={this.onChange} value={this.state.fridaySnacks}/></td>
                                    </tr>
                                    <tr>
                                        <th>Satruday <br></br> {this.props.getWeekdayDate(this.state.week,6)}</th>
                                        <td><Input type="textarea" name="saturdayBreakfast" id="saturdayBreakfast" onChange={this.onChange} value={this.state.saturdayBreakfast}/></td>
                                        <td><Input type="textarea" name="saturdayLunch" id="saturdayLunch" onChange={this.onChange} value={this.state.saturdayLunch}/></td>
                                        <td><Input type="textarea" name="saturdayDinner" id="saturdayDinner" onChange={this.onChange} value={this.state.saturdayDinner}/></td>
                                        <td><Input type="textarea" name="saturdaySnacks" id="saturdaySnacks" onChange={this.onChange} value={this.state.saturdaySnacks}/></td>
                                    </tr>
                                </tbody>
                            </Table>
                        
                            <Button
                                block
                                onClick={() => (this.setState({button: "edit"}))}
                                type="submit"
                                >Edit</Button>
                            <Button
                                block
                                onClick={() => (this.setState({button: "delete"}))}
                                type="submit"
                                >Delete</Button>
                        </Form> 
                    </ModalBody>
                 </Modal>
            </div>
        )
    }
}

export default UpdateMealPlan;


