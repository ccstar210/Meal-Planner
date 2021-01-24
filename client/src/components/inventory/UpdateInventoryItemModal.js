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


function UpdateInventoryItemModal(props) {

    const [modal,setModal] = useState(false);
    const [name,setName] = useState(props.name);
    const [quantity,setQuantity] = useState(props.quantity);
    const [unit,setUnit] = useState(props.unit);
    const [expDate,setExpDate] = useState(props.expDate);

    const onSubmit = e => {
        e.preventDefault();

        const updatedItem = {
            name,
            quantity,
            unit,
            expDate
        }        

        // Update item with updateInventoryItem action
        props.updateInventoryItem(props.id,updatedItem);

        // Close modal
        toggle();
    }
    
    /**
     * Converts date object to correct format "yyyy-mm-dd" so date will show up in modal dialog
     * @param   {Object} date MongoDB date object
     * @return  {String}      An empty string if the date object is empty or the converted date in "yyyy-mm-dd" form
     */
    const convertDate = date => {
        //https://stackoverflow.com/questions/3605214/javascript-add-leading-zeroes-to-date
        function pad(n) {
            return n<10 ? '0'+n : n
        }
        if(date) {
            var convertedDate;
            var newDate = new Date(date);
            var m = pad(newDate.getMonth()+1);
            var d = pad(newDate.getUTCDate()); //use UTC date or might be off by one since in CT
            var y = newDate.getFullYear();
            convertedDate = y+"-"+m+"-"+d;
        }
        else convertedDate='';

        return convertedDate;
    }

    const toggle = () => {
        setModal(!modal);
    };
    return (
        <div>
            <span onClick={toggle} className="material-icons float-left">create</span>

            <Modal
                isOpen={modal}
                toggle={toggle}>
                <ModalHeader toggle={toggle}>{props.inventoryType}</ModalHeader>
                <ModalBody>                
                        <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label for="item">Item</Label>
                            <Input
                                type="text"
                                placeholder="Add item"
                                value={name}
                                onChange={e => setName(e.target.value)}></Input>

                            <Label for="quant">Quantity</Label>
                            <Input
                                type="number"
                                placeholder="Add quantity"
                                value={quantity}
                                onChange={e => setQuantity(e.target.value)}></Input>

                            <Label for="unit">Unit</Label>
                            <Input
                                type="text"
                                placeholder="Add unit"
                                value={unit}
                                onChange={e => setUnit(e.target.value)}></Input>

                            <Label for="date">Expiration Date</Label>
                            <Input
                                type="date"
                                placeholder="Select a date"
                                value={convertDate(expDate)}
                                onChange={e => setExpDate(e.target.value)}></Input>

                            <Button
                                className="mt-4"
                                block
                                >Update Item</Button>
                        </FormGroup>
                    </Form> 
                </ModalBody>
            </Modal>
            
        </div>
    )
}

export default UpdateInventoryItemModal;





