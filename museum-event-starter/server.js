// IMPORTING REQUIRED RESOURCES
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');

const eventRoutes = require('./routes/event-routes');

// INITIALIZING THE APP
const app = express();

// MIDDLEWARES
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// ROUTES
app.use('/events', eventRoutes);

// WILL BE PLACING VIEW TEMPLATE
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// SETTING THE PORT EITHER FROM AN ENV OR HARD CODING TI TO 3000
const PORT = process.env.PORT || 3000;
// SETTING UP A LISTENER FOR THE PORT
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// INDEX ROUTE
// app.get('/', (req, res) => {
//   res.send('Welcome to museum events!');
// });

app.get('/', (req, res) => {
  res.render('index', {
    logoName: 'Museum Events' });
});

// app.get('/events', (req, res) => {
//   res.render('events/event-index', {
//     logoName: 'Museum Events' });
// });

// // IMPORT ROUTES AND TELLING APP TO USE THEM
// const eventRoutes = require('./routes/event-routes');
// app.use('/events', eventRoutes);

// ERROR HANDLER
app.get('*', (req, res) => {
  res.status(404).send('Not Found');
})
