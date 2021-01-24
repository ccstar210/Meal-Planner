import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


function GroceryList(props) {

    /**
     * Deletes the item from the grocery database based on its MongoDB id
     * @param   {Object} id MongoDB id object
     */
    const handleDelete = id => {
        props.deleteGroceryItem(id);
    }

    /**
     * Updates the checked field in the grocery database based on whether the box next to the item is checked or not
     * @param   {Object} id        MongoDB id object
     * @param   {String} checked   Boolen in string form to indicated if the box next to grocery item is checked or not
     */
    const handleCheck = (id, checked) => {
        //update the checkbox based on if the "checked" value is true or false
        var newValue;
        newValue = (checked === 'true') ? 'false' : 'true'
        const updatedItem = {
            checked: newValue,
        }        
        // Update checked status in the database with updateGroceryItem action
        props.updateGroceryItem(id,updatedItem);
    }

    return (
        <ListGroup className="my-4 text-break ">
            {props.groceryItems.map(({_id, item, checked }) => (  
                <ListGroupItem key={_id}>
                    {checked === 'false'
                        ?  <span id={"uncheck" + _id} className="material-icons mr-2" onClick={handleCheck.bind(this, _id, checked)}>check_box_outline_blank</span> 
                        :  <span id={"check" + _id} className="material-icons mr-2" onClick={handleCheck.bind(this, _id, checked)}>check_box</span> 
                    }
                    {item}
                    <span className="material-icons float-right" onClick={handleDelete.bind(this, _id)}>clear</span>
                </ListGroupItem>  
            ))}
        </ListGroup>   
    )
}

export default GroceryList;


