-- drop database top10000 if it exists --
DROP DATABASE IF EXISTS top10000Songs;

-- create the database that will hold the top 10000 songs --
CREATE DATABASE top10000Songs;

-- use this database --
USE top10000Songs;

-- create our table --
CREATE TABLE songs (
	id int auto_increment not null,
    artist varchar(50) not null,
	song varchar(30) not null,
	songYear varchar(4),
	rating integer(10),
	usrating integer(10),
	ukrating int(10),
	eurrating int(10),
	restrating int(10),
	primary key (id)
);