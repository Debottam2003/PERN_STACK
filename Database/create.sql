-- Active: 1732898219082@@127.0.0.1@5432@student
SELECT * FROM members;

-- INSERT INTO members (name, email, message) VALUES ('John Doe', 'john@gmail.com', '123456');

SELECT * FROM members;

create DATABASE student;

CREATE TABLE members(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

INSERT INTO members(name) VALUES('deb');

INSERT INTO members(name) VALUES('sritama');

INSERT INTO members(name) VALUES('soma');

INSERT INTO members(name) VALUES('gotu');