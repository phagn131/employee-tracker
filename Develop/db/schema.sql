DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT auto_increment NOT NULL,
  deparment_name VARCHAR(30) NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
    );

CREATE TABLE roles (	
  role_id INT auto_increment NOT NULL,
  job_title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
 
    );

CREATE TABLE employee (
  id INT auto_increment NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NOT NULL,
  reporting_manager VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
    );

  SHOW TABLES;
