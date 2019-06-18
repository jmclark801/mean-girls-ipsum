DROP DATABASE IF EXISTS mean_girls_db;
CREATE DATABASE mean_girls_db;
USE mean_girls_db;

CREATE TABLE quotes (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
quote VARCHAR(800),
character_name VARCHAR(255),
voice_over boolean
);