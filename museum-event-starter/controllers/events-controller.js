const Event = require('../models/event');

const eventController = {};

eventController.index = (req, res) => {
  Event.findAll()
    .then(events => {
      // console.log("this is events ", events)
      res.render('events/event-index', {
        message:'Displaying ALL events',
        data: events,
        logoName: 'Museum Events'
        });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
};

eventController.show = (req, res) => {
  Event.findById(req.params.id)
    .then(event => {
      res.render('events/event-single', {
        message: 'Displaying a single event',
        data: event,
        logoName: 'Museum Events'
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
};

eventController.create = (req, res) => {
  Event.create({
    museum_id:req.body.museum_id,
    name_of_event:req.body.name_of_event,
    description:req.body.description,
  }).then(task => {
      // res.json({
      //   message: 'Event successfully added!',
      //   data: event,
      // });
      res.redirect('/events')
  }).catch(err => {
      console.log(err);
      res.status(500).json(err);
  })
};

eventController.delete = (req, res) => {
  Event.destroy(req.params.id)
    .then(() => {
      res.redirect('/events')
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
};

module.exports = eventController;
