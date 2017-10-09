// CALLING IN EXPRESS
const express = require('express');
const eventController = require('../controllers/events-controller');

// CAUSING THE ROUTERS PROCEURES TO BE CARRIED OUT
const eventRoutes = express.Router();

eventRoutes.get('/', eventController.index);
eventRoutes.post('/', eventController.create);

eventRoutes.get('/add', (req, res) => {
  res.render('events/event-add');
});

eventRoutes.get('/:id/edit', eventController.edit); // seperate route and method in our controller for editing the event

eventRoutes.get('/:id', eventController.show);
eventRoutes.put('/:id', eventController.update); // inserted for update route
eventRoutes.delete('/:id', eventController.delete);

module.exports = eventRoutes;
