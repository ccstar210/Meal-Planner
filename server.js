// import the modules
const express = require('express');
const mongoose = require('mongoose');

// import the route modules
const pantry = require('./routes/api/pantry');
const fridge = require('./routes/api/fridge');
const freezer = require('./routes/api/freezer');
const grocery = require('./routes/api/grocery');
const recipes = require('./routes/api/recipes');
const mealplans = require('./routes/api/mealplans');

// DB config
const db = require('./config/keys').mongoURI;

const app = express();
app.use(express.json());


// Connect to MongoDB with mongoose
mongoose
    .connect(db, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true
     })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Routes for the different apis, add the Routers
app.use('/api/pantry', pantry);
app.use('/api/fridge', fridge);
app.use('/api/freezer', freezer);
app.use('/api/grocery', grocery);
app.use('/api/recipes', recipes);
app.use('/api/mealplans', mealplans);

const port = process.env.PORT || 5000;

// Start up server on the indicated port
app.listen(port, () => console.log(`Server started on port ${port}`));
