import React, { Component } from 'react';
import { 
    Container, 
    ListGroup,
    Table 
} from 'reactstrap';
import UpdateInventoryItemModal from './UpdateInventoryItemModal';
import ItemsPagination from '../ItemsPagination';


class InventoryList extends Component {
    //for pagination
    state = {
        currentPage: 1,
        itemsPerPage: 10
    }

    /**
     * Deletes the item from the proper inventory database (pantry, fridge, freezer) based on its MongoDB id
     * @param   {Object} id MongoDB id object
     */
    onDeleteClick = (id) => { 
        this.props.deleteInventoryItem(id);
    }

    /**
     * Formats the date in MM/DD/YYYY form
     * @param   {Object} date MongoDB date object
     * @return  {String}      An empty string if the date object is empty or the formatted date in MM/DD/YYYY form
     */
    formatDate = (date) => {
        let formattedDate;
        if (date) {
            let newDate = new Date(date);
            let m = newDate.getMonth()+1;
            let d = newDate.getUTCDate();
            let y = newDate.getFullYear();
            formattedDate = m+"/"+d+"/"+y;
        }
        else
            formattedDate = '';

        return formattedDate;
    }

    /**
     * Displays the correct group of items from the total inventory items for pagination
     * @param   {Number} currentPage The current page number selected
     * @param   {Object} items       Array of objects of the items in the inventory (pantry, fridge, or freezer database)
     * @return  {Object}             Array of objects which is the section from items based on the page number selected and number of items per page
     */
    getCurrentItems = (currentPage, items) => {
        const indexOfLastItem = currentPage * this.state.itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - this.state.itemsPerPage;
        return items.slice(indexOfFirstItem, indexOfLastItem);
    }

    /**
     * Sets the currentPage number state based on the number clicked from pagination
     * @param   {Number} pageNumber The page number from pagination
     */
    paginate = (pageNumber) => this.setState({ currentPage: pageNumber });

    render() {
        return (
            <Container>
                <ListGroup>
                    <Table className="text-center" >
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Unit</th>
                                <th>Expiration Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.getCurrentItems(this.state.currentPage, this.props.inventoryItems).map(({_id, name, quantity, unit, expDate }) => (  
                                <tr key={_id} >
                                    <td>{name}</td>
                                    <td>{quantity}</td>
                                    <td>{unit}</td>
                                    <td>{this.formatDate(expDate)}</td>
                                    <td>
                                        <UpdateInventoryItemModal 
                                            id={_id} 
                                            name={name}
                                            quantity={quantity}
                                            unit={unit}
                                            expDate={expDate}
                                            updateInventoryItem={this.props.updateInventoryItem}
                                            inventoryItems={this.props.inventoryItems}
                                            inventoryType={this.props.inventoryType} />
                                        <span onClick={ this.onDeleteClick.bind(this, _id)} className="material-icons" >clear</span>
                                    </td>             
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </ListGroup>
                <ItemsPagination 
                    itemsPerPage={this.state.itemsPerPage} 
                    totalItems={this.props.inventoryItems.length} 
                    paginate={this.paginate}
                    currentPage={this.state.currentPage}></ItemsPagination>
            </Container>
        )
    }
}

export default InventoryList;




