import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    Label,
    Input,
    Table
} from 'reactstrap';
import moment from 'moment';


class AddMealPlan extends Component {
    state = {
        modal: false,
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
        status: 'future'
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            }
        );
    };


    onSubmit = e => {
        e.preventDefault();
        
        const newMealPlan = {
            week: this.state.week,
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
            //calculate status based on week selected
            //status: this.props.getStatus(this.state.week)
            status: 'future'
            
        }
   
        // Add mealplan with addMealPlan action
        this.props.addMealPlan(newMealPlan);  

        //resetState to blank values
        this.resetState();

        // Close modal
        this.toggle();


    }

    resetState = () => {
        this.setState({
            modal: false,
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
            status: 'future'
    
        });
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    /**
     * Determines if the week is already in the mealplan database
     * @param   {String} week Week in MM/DD/YYYY-MM/DD/YYYY format
     * @return                Returns true if the week already exists in the mealplan database or false if it does not
     */
    isWeek = (week) => {
        let flag = false;
        this.props.mealplans.forEach(mealplan => {
            if(mealplan.week === week) {
                flag = true;   
            }    
        });
        return flag;
    }


    render() {
        return(
            <div>
                <Button
                    onClick={this.toggle}>
                    <span className="material-icons mr-2">add</span>Create Plan
                </Button>
                <Modal
                    size="xl"
                    isOpen={this.state.modal}
                    toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add Meal Plan</ModalHeader>
                    <ModalBody> 
                        <Form onSubmit={this.onSubmit}>
                            <Label for="mealplan">Week of</Label>
                            <Input className="mb-4" type="select" name="week" id="mealplanweeks" defaultValue="" onClick={this.onChange}>
                                <option value="" disabled>Select a week</option>
                                {/* Show next 10 available weeks from current date */}
                                {[...Array(10)].map((e,i) => 
                                        <option key={i} disabled={this.isWeek(this.props.displayWeek(moment().add(i*7, 'days')))} value={this.props.displayWeek(moment().add(i*7, 'days'))}>{this.props.displayWeek(moment().add(i*7, 'days'))}</option> )}  
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
                                        <td><Input type="textarea" name="sundayBreakfast" id="sundayBreakfast" onChange={this.onChange}/></td>
                                        <td><Input type="textarea" name="sundayLunch" id="sundayLunch" onChange={this.onChange}/></td>
                                        <td><Input type="textarea" name="sundayDinner" id="sundayDinner" onChange={this.onChange}/></td>
                                        <td><Input type="textarea" name="sundaySnacks" id="sundaySnacks" onChange={this.onChange}/></td>
                                    </tr>
                                    <tr>
                                        <th>Monday <br></br> {this.props.getWeekdayDate(this.state.week,1)} </th>
                                        <td><Input type="textarea" name="mondayBreakfast" id="mondayBreakfast" onChange={this.onChange}/></td>
                                        <td><Input type="textarea" name="mondayLunch" id="mondayLunch" onChange={this.onChange}/></td>
                                        <td><Input type="textarea" name="mondayDinner" id="mondayDinner" onChange={this.onChange}/></td>
                                        <td><Input type="textarea" name="mondaySnacks" id="mondaySnacks" onChange={this.onChange}/></td>
                                    </tr>
                                    <tr>
                                        <th>Tuesday <br></br> {this.props.getWeekdayDate(this.state.week,2)} </th>
                                        <td><Input type="textarea" name="tuesdayBreakfast" id="tuesdayBreakfast" onChange={this.onChange}/></td>
                                        <td><Input type="textarea" name="tuesdayLunch" id="tuesdayLunch" onChange={this.onChange}/></td>
                                        <td><Input type="textarea" name="tuesdayDinner" id="tuesdayDinner" onChange={this.onChange}/></td>
                                        <td><Input type="textarea" name="tuesdaySnacks" id="tuesdaySnacks" onChange={this.onChange}/></td>
                                    </tr>
                                    <tr>
                                        <th>Wednesday <br></br> {this.props.getWeekdayDate(this.state.week,3)}</th>
                                        <td><Input type="textarea" name="wednesdayBreakfast" id="wednesdayBreakfast" onChange={this.onChange}/></td>
                                        <td><Input type="textarea" name="wednesdayLunch" id="wednesdayLunch" onChange={this.onChange}/></td>
                                        <td><Input type="textarea" name="wednesdayDinner" id="wednesdayDinner" onChange={this.onChange}/></td>
                                        <td><Input type="textarea" name="wednesdaySnacks" id="wednesdaySnacks" onChange={this.onChange}/></td>
                                    </tr>
                                    <tr>
                                        <th>Thursday <br></br> {this.props.getWeekdayDate(this.state.week,4)}</th>
                                        <td><Input type="textarea" name="thursdayBreakfast" id="thursdayBreakfast" onChange={this.onChange}/></td>
                                        <td><Input type="textarea" name="thursdayLunch" id="thursdayLunch" onChange={this.onChange}/></td>
                                        <td><Input type="textarea" name="thursdayDinner" id="thursdayDinner" onChange={this.onChange}/></td>
                                        <td><Input type="textarea" name="thursdaySnacks" id="thursdaySnacks" onChange={this.onChange}/></td>
                                    </tr>
                                    <tr>
                                        <th>Friday <br></br> {this.props.getWeekdayDate(this.state.week,5)}</th>
                                        <td><Input type="textarea" name="fridayBreakfast" id="fridayBreakfast" onChange={this.onChange}/></td>
                                        <td><Input type="textarea" name="fridayLunch" id="fridayLunch" onChange={this.onChange}/></td>
                                        <td><Input type="textarea" name="fridayDinner" id="fridayDinner" onChange={this.onChange}/></td>
                                        <td><Input type="textarea" name="fridaySnacks" id="fridaySnacks" onChange={this.onChange}/></td>
                                    </tr>
                                    <tr>
                                        <th>Satruday <br></br> {this.props.getWeekdayDate(this.state.week,6)}</th>
                                        <td><Input type="textarea" name="saturdayBreakfast" id="saturdayBreakfast" onChange={this.onChange}/></td>
                                        <td><Input type="textarea" name="saturdayLunch" id="saturdayLunch" onChange={this.onChange}/></td>
                                        <td><Input type="textarea" name="saturdayDinner" id="saturdayDinner" onChange={this.onChange}/></td>
                                        <td><Input type="textarea" name="saturdaySnacks" id="saturdaySnacks" onChange={this.onChange}/></td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Button block>Create Meal Plan</Button>
                        </Form>     
                    </ModalBody>
                 </Modal>
            </div>
        )
    }
}

export default AddMealPlan;
