import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';



function AddInventoryItemModal({addInventoryItem, inventoryType}) {
    const [modal,setModal] = useState(false);
    const [name,setName] = useState('');
    const [quantity,setQuantity] = useState('');
    const [unit,setUnit] = useState('');
    const [expDate,setExpDate] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        
        const newItem = {
            name,
            quantity,
            unit,
            expDate
        }
   

        // Add item to the database with addInventoryItem action
        addInventoryItem(newItem);  

        //reset form to blank values
        resetState();

        // Close modal
        toggle();

    }

    const resetState = () => {
        setName('');
        setQuantity('');
        setUnit('');
        setExpDate('');
    }

    const toggle = () => {
        setModal(!modal);
    };
    
    return (
        <div className="mb-2">
            <Button
                onClick={toggle}>
                <span className="material-icons">add</span>Add item
            </Button>

            <Modal
                isOpen={modal}
                toggle={toggle}>
                <ModalHeader toggle={toggle}>{inventoryType}</ModalHeader>
                <ModalBody>
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label for="item">Item</Label>
                            <Input
                                type="text"
                                placeholder='Add item'
                                onChange={e => setName(e.target.value)}></Input>

                            <Label for="quant">Quantity</Label>
                            <Input
                                type="number"
                                placeholder='Add quantity'
                                onChange={e => setQuantity(e.target.value)}></Input>

                            <Label for="unit">Unit</Label>
                            <Input
                                type="text"
                                placeholder='Add the unit'
                                onChange={e => setUnit(e.target.value)}></Input>

                            <Label for="date">Expiration Date</Label>
                            <Input
                                type="date"
                                placeholder='Select a date'
                                onChange={e => setExpDate(e.target.value)}></Input>

                            <Button block>Add Item</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default AddInventoryItemModal;



    