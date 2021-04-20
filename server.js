/* ------------------------ Globals ------------------------ */

// Setup empty JS object to act as endpoint for all routes
projectData = {};

const port = 3000

/* ------------------------ Express and Middleware ------------------------ */
// Setup Express and create app instance
const express = require('express');
const app = express();

// Configuring express to use body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const { request } = require('express');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server and perform a callback to debug
const server = app.listen(port, () => {console.log(`running on localhost: ${port}`)});

/* ------------------------ Helper Functions ------------------------ */

/* ------------------------ Routes ------------------------ */
// Initialize all route and respond with JS object when a GET request is made to the homepage
app.get('/recent', (req, res) => {
    res.send(projectData);
})

// Post Route, receive weather and user-entry data from clientside and add it to projectData object
app.post('/post', (req, res) => {
    // Record date, temperature and user feelings
    projectData = {
        date: req.body.date,
        temperature: req.body.temperature,
        feelings: req.body.feelings
    };
    res.send('Success')
})