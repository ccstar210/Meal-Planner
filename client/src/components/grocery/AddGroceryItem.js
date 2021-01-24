import React, {useState} from 'react';
import { Button, Input, Form } from 'reactstrap';

function AddGroceryItem(props) {
    const [item, setItem] = useState('');
    
    const onChange = (e) => {
        setItem(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();
        const newItem = {
            item: item,
            checked: "false"
        }

        // Add item to the grocery database with addGroceryItem action
        props.addGroceryItem(newItem);  

        //reset item value to empty string
        setItem('');
    
    }
    
    return (
        <Form onSubmit={onSubmit} className="input-group">
            <Input value={item} placeholder="Add an item..." onChange={onChange}></Input>            
            <Button className="rounded-0" onClick={onSubmit}><span className="material-icons">add</span></Button>
        </Form>
    )
}

export default AddGroceryItem;

