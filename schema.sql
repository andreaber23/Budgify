DROP DATABASE IF EXISTS Budgify;
CREATE DATABASE finance;

USE finance_db;

CREATE TABLE department (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10)
)

CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(10),
    salary DECIMAL,
    department_id INT
    FOREIGN KEY (department_id) REFERENCES department(id)
)