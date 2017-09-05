INSERT INTO museums (museum_name) VALUES
('American Museum of Natural History'),
('Brooklyn Museum');

INSERT INTO events (museum_id, name_of_event, description) VALUES
( 1,
  'Astronomy Live',

  -- REFRENCING https://www.amnh.org/calendar/astronomy-live-the-grand-tour2

  'Nearly all of us know we`re the third planet from the Sun, but where are we among the stars in
  the Milky Way? Do we hold a special place among the planets, stars, and galaxies in the universe?
  The Grand Tour will answer these questions while you travel from Earth to the most distant objects
  in the universe.
  DATE AND TIME: Tuesday September 26 at 7pm '
),
(
  2,
  'The Brooklyn Conference: Inspiring Social Change',

  -- REFRENCING https://www.brooklynmuseum.org/calendar/type/special-events

  'Join us as we kick off a gathering of artists, filmmakers, writers, performers, leaders,
  activists, and elected officials to explore the intersections of art and social justice.
  DATE AND TIME: October 19 in the evening'
),
(
  1,
  'Frontiers Lecture: Why? What Makes Us Curious',

  -- REFRENCING https://www.amnh.org/calendar/frontiers-lecture-why-what-makes-us-curious-with-mario-livio
  'The ability to ask “Why?” is uniquely human. Curiosity drives basic scientific research, powers
  the creativity in disciplines from the arts to technology, and is a necessary ingredient in every
  form of storytelling. Astrophysicist and bestselling author Mario Livio describes cutting-edge
  research about the origins and mechanisms of human curiosity.
  DATE AND TIME: Monday September 18 at 7:30pm '
);
