### Schema

CREATE DATABASE burger;

USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured boolean NOT NULL,
	date date NOT NULL,
	PRIMARY KEY (id)
);


