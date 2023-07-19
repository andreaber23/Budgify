# Budgify

## Description
Built a personal finance website that measures your expenses and calculates your financial data.

## Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
For this application to run how it is supposed to, user needs to install the following packages. These can be install using the integrated terminal.

- Install MySQL2 package to connect the database from MySQL and be able to perform the quieres. Type in the integrated terminal "npm install --save mysql2". (https://www.npmjs.com/package/mysql2)
- Install Sequelize package (https://www.npmjs.com/package/sequelize)
- Install Dotenv package. It stores sensitive data, like a user’s MySQL username, password, and database name (https://www.npmjs.com/package/dotenv)
- Install bcrypt version 5.1.0
- Install express 4.18.2, express-handlebars 7.0.7, express-session 1.17.3
- Install sequelize 6.32.1
- Install node_modules version 1.0.11
  
  
## Usage
After installing all the packages, open mysql to create the database. Type the following:

DROP DATABASE IF EXISTS budgify_db;
CREATE DATABASE budgify_db;

Then , open the integrated terminal and type "npm run seed", this is to seed data into the database created. Once that is done, it is time to test each route. For this process, it will require Insomnia. There will test any GET, POST, PUT or Delete requests. To lanuch the website server, type npm start.

## License
MIT License
Apache License 2.0

## Contributing
@andreaber23
@lexmachado
@carolynlupi
@jimen8930
@zwell99

## Tests
0

## Questions
If you have any questions reach out to me at andreaber23@hotmail.com.
My Github username is andreaber23 and this is the link to my Github https://github.com/andreaber23
