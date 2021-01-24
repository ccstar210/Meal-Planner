const express = require('express');
const router = express.Router();
//for uploading files
const multer = require("multer");

// Recipes Model
const Recipes = require('../../models/Recipes');

//store file uploads in a folder called uploads
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./client/public/uploads");
    },
    filename: (req,file, callback) => {
        callback(null, file.originalname);
    }
})

const upload = multer({storage: storage});

// REST apis

// @route GET api/recipes
// @description Get all the recipes in the recipes collection
// @access Public
router.get('/', (req, res) => {
    Recipes.find()
        .then(items => res.json(items))
        .catch(err => res.status(500).json({message: err.message }));
});


// @route POST api/recipes
// @description Add a recipe to the recipes collection
// @access Public
router.post('/', upload.fields([{ name: 'file', maxCount: 1}, { name: 'image', maxCount: 1}]), (req, res) => {
    var newRecipe;
    //if no file or image file was added
    if(req.files.file === undefined && req.files.image === undefined) {
        newRecipe = new Recipes({
            name: req.body.name,
            url: req.body.url,
            file: '',
            image: '',
            type: req.body.type,
            notes: req.body.notes,
            favorite: req.body.favorite
        });
    
    } else if ( req.files.image === undefined) { //only a file was added
        newRecipe = new Recipes({
            name: req.body.name,
            url: req.body.url,
            file: req.files.file[0].originalname,
            image: '',
            type: req.body.type,
            notes: req.body.notes,
            favorite: req.body.favorite
        });
    } else if ( req.files.file === undefined) { //only an image file was added
        newRecipe = new Recipes({
            name: req.body.name,
            url: req.body.url,
            file: '',
            image: req.files.image[0].originalname,
            type: req.body.type,
            notes: req.body.notes,
            favorite: req.body.favorite
        });
    }
    else {
        newRecipe = new Recipes({ //both file and image file were added
            name: req.body.name,
            url: req.body.url,
            file: req.files.file[0].originalname,
            image: req.files.image[0].originalname,
            type: req.body.type,
            notes: req.body.notes,
            favorite: req.body.favorite
        });
    }
       
    newRecipe.save()
    .then( item => res.json(item))
    .catch(err => res.status(400).json({message: err.message}));
});

// @route Patch api/recipes
// @description Update a recipe in the recipes collection
// @access Public
router.patch('/:id',  upload.fields([{ name: 'file', maxCount: 1}, { name: 'image', maxCount: 1}]), async (req, res) => {    
    function compare(item) {
        //when the "favorite" recipe button is selected, only the favorite field changes and so no files are added so req.files will be undefined
        if(req.files === undefined) {
            if (req.body.favorite != null) {
                item.favorite = req.body.favorite
            } 
        } else { //updating everything else
            if (req.body.name != null) {
                item.name = req.body.name
            }
            if (req.body.url != null) {
                item.url = req.body.url
            }
            if (req.files.file != undefined) {
                item.file = req.files.file[0].originalname
            }
            if (req.files.image !== undefined) {
                item.image = req.files.image[0].originalname
            }
            if( req.body.file != null) { //use when deleting the already uploaded file
                item.file = req.body.file
            }
            if( req.body.image != null) { //use when deleting the already uploaded image
                item.image = req.body.image
            }
            if (req.body.type != null) {
                item.type = req.body.type
            }
            if (req.body.notes != null) {
                item.notes = req.body.notes
            }
            if (req.body.favorite != null) {
                item.favorite = req.body.favorite
            } 
        }
        
        return Promise.resolve();
    }
    
    Recipes.findById(req.params.id)
    .then(item => compare(item).then(item.save().then(item => res.json(item))))
    .catch(err => res.status(500).json({message: err.message}))
    
});

// @route DELETE api/recipes/:id
// @description Delete a recipe from the recipes collection
// @access Public
router.delete('/:id', (req, res) => {
    Recipes.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});


module.exports = router;