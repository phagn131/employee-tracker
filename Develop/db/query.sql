-- schema files holds the structures
DROP DATABASE IF EXISTS airline_db;
CREATE DATABASE airline_db;

USE airline_db;

-- flights and pilots
-- flight
-- id, flightnumber, start time, end time, origin, destination, pilot_id, status

CREATE TABLE flights (
    -- name_of_column   data_type   __options or default values__  NOT NULL or NULL
	id INT auto_increment NOT NULL,
	flight_number VARCHAR(30) NOT NULL,
    -- DATETIME '2022-11-23 20:36:00'
    start_time DATETIME NOT NULL,
    end_time DATETIME NOT NULL,
    origin VARCHAR(6) NOT NULL,
    destination VARCHAR(6) NOT NULL,
    `status` VARCHAR(20) NOT NULL,
    pilot_id INT NOT NULL,
    PRIMARY KEY (id) -- both primary key and auto_increment has to be set for the column id to work correctly
);

-- pilot
-- id, first name, last name, airline name

CREATE TABLE pilots (
	id INT auto_increment NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    airline_name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id) -- both primary key and auto_increment has to be set for the column id to work correctly
);