const db = require('../db/config');

const Event = {};

Event.findAll = () => {
  return db.query(`
    SELECT event_id, name_of_event, museums.museum_name, description
    FROM events INNER JOIN museums
    ON events.museum_id = museums.museum_id
    ORDER BY event_id;
    `
    //  THIS DISPLAYS MUSEUM NAME INSTEAD OF ID AS PREVIOUS CODE BLOCK
    // SELECT event_id, name_of_event, museums.museum_name, description
    // FROM events INNER JOIN museums
    // ON events.museum_id = museums.museum_id
    // ORDER BY event_id;
    );
},
Event.findById = (id) => {
  return db.oneOrNone(`
    SELECT event_id, name_of_event, museums.museum_name, description
    FROM events INNER JOIN museums
    ON events.museum_id = museums.museum_id
    WHERE event_id = $1
    `, [id]);
},
// WILL MUSEUM ID DISPLAY INSTEAD OF MUSEUM NAME ?
Event.create = (event) => {
  return db.one(`
    INSERT INTO events
    (museum_id, name_of_event, description)
    VALUES($1, $2, $3)
    RETURNING *
    `, [event.museum_id, event.name_of_event, event.description]);
},
Event.destroy = (id) => {
  return db.none(`
    DELETE FROM events
    WHERE event_id = $1
    `,[id]);
}

module.exports = Event;
