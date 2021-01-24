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


function AddRecipesModal({addRecipe}) {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [file, setFile] = useState('');
    const [image, setImage] = useState('');
    const [type, setType] = useState('');
    const [notes, setNotes] = useState('');

    const onChangeFile = (e) => {
        setFile(e.target.files[0]);
    }

    const onChangeFileImage = (e) => {
        setImage(e.target.files[0]);
    }

    const onSubmit = e => {
        e.preventDefault();

        const newRecipe = new FormData();
        newRecipe.append('name', name);
        newRecipe.append('url', url);
        newRecipe.append('file', file);
        newRecipe.append('image', image);
        newRecipe.append('type', type);
        newRecipe.append('notes', notes);
        newRecipe.append('favorite', false);

        // Add recipe with addRecipe action
        addRecipe(newRecipe);  

        //resetState to blank values
        resetState();

        // Close modal
        toggle();


    }

    const resetState = () => {
        setName('');
        setUrl('');
        setFile('');
        setImage('');
        setType('');
        setNotes('');
    }

    const toggle = () => {
        setModal(!modal)
    };

    return (
        
        <div>
             <Button
                onClick={toggle}>
                <span className="material-icons">add</span>Add Recipe
            </Button>

            <Modal
                isOpen={modal}
                toggle={toggle}>
                <ModalHeader toggle={toggle}>Add Recipe</ModalHeader>
                <ModalBody>
                    <Form onSubmit={onSubmit} encType="multipart/form-data">
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                type="text"
                                placeholder='Add recipe'
                                onChange={e => setName(e.target.value)}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="url">Url</Label>
                            <Input
                                type="text"
                                placeholder='Add url'
                                onChange={e => setUrl(e.target.value)}>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="file">Browse for recipe</Label>
                            <Input
                                type="file"
                                filename="file"
                                onChange={onChangeFile}>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="file">Recipe Image</Label>
                            <Input
                                type="file"
                                filename="image"
                                onChange={onChangeFileImage}>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="type">Recipe Type</Label>
                            <Input
                                type="select"
                                onChange={ e => setType(e.target.value)}>
                                    <option></option>
                                    <option>Breakfast</option>
                                    <option>Lunch/Dinner</option>
                                    <option>Dessert</option>
                                    <option>Snack</option>
                                    <option>Side Dish</option>
                                    <option>Other</option>
                            </Input>
                        </FormGroup>  
                        <FormGroup>
                            <Label for="notes">Additional Notes</Label>
                            <Input type="textarea" onChange={e => setNotes(e.target.value)} />
                        </FormGroup>
                        <Button block>Add Recipe</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default AddRecipesModal;

