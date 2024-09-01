-- users table --
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(25) UNIQUE NOT NULL,
  color VARCHAR(25)
);

-- visited_countries table --
CREATE TABLE visited_countries (
  id SERIAL PRIMARY KEY,
  country_code CHAR(2) NOT NULL,
  user_id INTEGER REFERENCES users(id)
);

-- Data --
INSERT INTO users (name, color)
VALUES ('Asaya', 'Pink'),('Achara', 'Teal')

INSERT INTO visited_countries (country_code, user_id)
VALUES ('FR', 1), ('GB', 1), ('CA', 2), ('FR', 2 )


-- JOIN TABLE --
SELECT *
FROM visited_countries
JOIN users
ON users.id = user_id;