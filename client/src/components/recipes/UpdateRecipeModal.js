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

function UpdateRecipeModal(props) {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState(props.recipe.name);
    const [url, setUrl] = useState(props.recipe.url);
    const [file, setFile] = useState(props.recipe.file);
    const [image, setImage] = useState(props.recipe.image);
    const [type, setType] = useState(props.recipe.type);
    const [notes, setNotes] = useState(props.recipe.notes);

    const onSubmit = e => {
        e.preventDefault();

        const updatedRecipe = new FormData();
        updatedRecipe.append('name', name);
        updatedRecipe.append('url', url);
        updatedRecipe.append('file', file);
        updatedRecipe.append('image', image);
        updatedRecipe.append('type', type);
        updatedRecipe.append('notes', notes);
        // Update recipe with updateRecipe action
        props.updateRecipe(props.recipe._id, updatedRecipe);

        // Close modal
        toggle();


    }

    const toggle = () => {
        setModal(!modal)
    };
    
    /**
     * "Deletes" the file by setting the file name to an empty string, the file will be actually deleted in the onSubmit function
     */
    const deleteFile = () => {
        setFile('');
    }

    /**
     * "Deletes" the image by setting the image file name to an empty string, the image will be actually deleted in the onSubmit function
     * The image will be replaced with the default stock image
     */
    const deleteImage = () => {
        setImage('');
    }

    return (
        <div>
            <span className="material-icons childLeft" onClick={toggle}>create</span>
            <Modal
                isOpen={modal}
                toggle={toggle}>
                <ModalHeader toggle={toggle}>Update Recipe</ModalHeader>
                <ModalBody>                
                    <Form onSubmit={onSubmit} encType="multipart/form-data">
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="url">Url</Label>
                            <Input
                                type="text"
                                value={url}
                                onChange={e => setUrl(e.target.value)}>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="file">Browse for recipe <br></br> Current file selected: {(typeof file === 'object') ? file.name : file } </Label>
                            <Input
                                type="file"
                                filename="file"
                                onChange={e=> setFile(e.target.files[0])}>
                            </Input>
                            <Button onClick={deleteFile} className="mt-2">Delete file</Button>
                        </FormGroup>
                        <FormGroup>
                            <Label for="image" >Recipe Image <br></br> Current image selected: {(typeof image === 'object') ? image.name : image } </Label>
                            <Input
                                type="file"
                                filename="image"
                                onChange={e=> setImage(e.target.files[0])}>
                            </Input>
                            <Button onClick={deleteImage} className="mt-2">Delete image</Button>
                        </FormGroup>
                        <FormGroup>
                            <Label for="type">Recipe Type</Label>
                            <Input
                                type="select"
                                value={type}
                                onChange={e => setType(e.target.value)}>
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
                            <Input 
                                type="textarea" 
                                value={notes}
                                onChange={e => setNotes(e.target.value)} >
                            </Input>
                        </FormGroup>
                        <Button block>Update Recipe</Button>
                    </Form> 
                </ModalBody>
            </Modal>
        </div>
    )
}

export default UpdateRecipeModal;



