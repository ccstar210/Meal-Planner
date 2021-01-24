import React, { Component } from 'react';
import Header from '../layout/Header';
import InventoryTabs from '../inventory/InventoryTabs';
import { Container } from 'reactstrap';


class Inventory extends Component {
    render() {
        return (
            <div>
                <Header title="My Inventory" />
                <Container>
                    <InventoryTabs />
                </Container>
            </div>
        );
    }
}

export default Inventory;