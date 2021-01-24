import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

class AppNavBar extends Component {
    render() {
        return (
            <div>
            <Navbar className="mainColor" expand="sm">
                <NavbarBrand className="linkStyle" href="/">MealPlansForYou <img alt="logo" src="./images/crossiantLogo.svg" height="50px" width="50px" className="logo"></img></NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="linkStyle" href="/grocery">Grocery List</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="linkStyle" href="/inventory">Inventory</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="linkStyle" href="/recipes">Recipes</NavLink>
                        </NavItem>
                    </Nav>
            </Navbar>
        </div>
        );
    }

}


export default AppNavBar;
