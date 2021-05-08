GRANT ALL PRIVILEGES ON DATABASE postgres TO postgres;

DROP TABLE IF EXISTS questions;

CREATE TABLE questions (
  question_id SERIAL PRIMARY KEY,
  question VARCHAR NOT NULL,
  answer VARCHAR NOT NULL,
  page_id INTEGER NOT NULL
);

-- ---
-- Table 'users'
--
-- ---

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  user_name VARCHAR NOT NULL,
  password VARCHAR NOT NULL
);

-- ---
-- Test Data
-- ---

INSERT INTO questions (question,answer,page_id) VALUES
('What is the word for eggs in Spanish?','huevos', 4),
('In german what is the word for eggs?','Eier', 4),
('How would you say butterfly in German?','Schmetterling', 3),
('How would you say butterfly in Spanish?','mariposa', 3),
('How would you say refrigerator German?','Kühlschrank', 3),
('ham','jamon', 2),
('eggs','heuvos', 2),
('fruit','fruta', 2),
('toast','brindis', 2),
('ham','Schinken', 1),
('eggs','Eier', 1),
('fruit','Obst', 1),
('toast','Toast', 1);



INSERT INTO users (user_name,password) VALUES
('Tom','burntToast53'),
('Larry','octopus9000'),
('Ralph','stethescope22');


