\c museum_events_db;

CREATE TABLE IF NOT EXISTS museums (
  museum_id SERIAL PRIMARY KEY,
  museum_name VARCHAR(75)
);

CREATE TABLE IF NOT EXISTS events (
  event_id SERIAL PRIMARY KEY,
  museum_id INT,
  name_of_event VARCHAR(50),
  description TEXT,
  FOREIGN KEY (museum_id) REFERENCES museums(museum_id)
);
