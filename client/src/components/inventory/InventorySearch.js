import React, { useState } from 'react';
import { 
    Form,
    Input,
    Button,
} from 'reactstrap';

//Search based on the inventory item name
const InventorySearch = (props) => {
    const [input, setInput] = useState('');
    

    const handleSubmit = e => {
        e.preventDefault();
        props.searchInventoryItems(input);
        setInput('');
    }

    return(
        <div >
            <Form className="input-group mb-4" onSubmit={handleSubmit}>
                <Input type='text' name="pantryInput" value={input} onChange={e => setInput(e.target.value)} placeholder={props.placeHolderMsg}></Input>
                <Button className="rounded-0" type='submit'><span className="material-icons">search</span></Button>                
            </Form>
        </div>
    )
}


export default InventorySearch;