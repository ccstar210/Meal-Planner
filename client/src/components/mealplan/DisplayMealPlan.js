import React from 'react';
import { Table } from 'reactstrap';

function DisplayMealPlan({mealplan, getWeekdayDate}) {
    return (
        <Table className="text-center" >
            <thead>
                <tr>
                    <th></th>
                    <th>Breakfast</th>
                    <th>Lunch</th>
                    <th>Dinner</th>
                    <th>snacks</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Sunday <br></br> {getWeekdayDate(mealplan.week,0)} </th>
                    <td>{mealplan.sunday[0].breakfast}</td>
                    <td>{mealplan.sunday[0].lunch}</td>
                    <td>{mealplan.sunday[0].dinner}</td>
                    <td>{mealplan.sunday[0].snacks}</td>
                </tr>
                <tr>
                    <th>Monday <br></br> {getWeekdayDate(mealplan.week,1)} </th>
                    <td>{mealplan.monday[0].breakfast}</td>
                    <td>{mealplan.monday[0].lunch}</td>
                    <td>{mealplan.monday[0].dinner}</td>
                    <td>{mealplan.monday[0].snacks}</td>
                </tr>
                <tr>
                    <th>Tuesday <br></br> {getWeekdayDate(mealplan.week,2)} </th>
                    <td>{mealplan.tuesday[0].breakfast}</td>
                    <td>{mealplan.tuesday[0].lunch}</td>
                    <td>{mealplan.tuesday[0].dinner}</td>
                    <td>{mealplan.tuesday[0].snacks}</td>
                </tr>
                <tr>
                    <th>Wednesday <br></br> {getWeekdayDate(mealplan.week,3)} </th>
                    <td>{mealplan.wednesday[0].breakfast}</td>
                    <td>{mealplan.wednesday[0].lunch}</td>
                    <td>{mealplan.wednesday[0].dinner}</td>
                    <td>{mealplan.wednesday[0].snacks}</td>
                </tr>
                <tr>
                    <th>Thursday <br></br> {getWeekdayDate(mealplan.week,4)}</th>
                    <td>{mealplan.thursday[0].breakfast}</td>
                    <td>{mealplan.thursday[0].lunch}</td>
                    <td>{mealplan.thursday[0].dinner}</td>
                    <td>{mealplan.thursday[0].snacks}</td>
                </tr>
                <tr>
                    <th>Friday <br></br> {getWeekdayDate(mealplan.week,5)} </th>
                    <td>{mealplan.friday[0].breakfast}</td>
                    <td>{mealplan.friday[0].lunch}</td>
                    <td>{mealplan.friday[0].dinner}</td>
                    <td>{mealplan.friday[0].snacks}</td>
                </tr>
                <tr>
                    <th>Satruday <br></br> {getWeekdayDate(mealplan.week,6)}</th>
                    <td>{mealplan.saturday[0].breakfast}</td>
                    <td>{mealplan.saturday[0].lunch}</td>
                    <td>{mealplan.saturday[0].dinner}</td>
                    <td>{mealplan.saturday[0].snacks}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default DisplayMealPlan;




