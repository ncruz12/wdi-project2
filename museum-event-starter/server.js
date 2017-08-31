// IMPORTING REQUIRED RESOURCES
const express = require('express');
const logger = ('morgan');
const bodyParser = require('body-parser');

// INITIALIZING THE APP
const app = express();

// MIDDLEWARES
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// WILL BE PLACING VIEW TEMPLATE

// SETTING THE PORT EITHER FROM AN ENV OR HARD CODING TI TO 3000
const PORT = process.env.PORT || 3000;
// SETTING UP A LISTENER FOR THE PORT
app.listen(port, () => {
  console.log(`Listening on port ${PORT}`);
});

// INDEX ROUTE
app.get('/', (req, res) => {
  res.send('Welcome to museum events!');
});

// IMPORT ROUTES AND TELLING APP TO USE THEM


// ERROR HANDLER
app.get('*', (req, res) => {
  res.status(404).send('Not Found');
})
