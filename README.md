# Budgify

## Description
Built a personal finance website that tracks your monthly or annually expenses.

## Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Walkthrough-video](#walkthrough-video)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
For this application to run without any issues the user needs to install the following packages. These can be install using the integrated terminal.

- MySQL2 package to connect the database from MySQL and be able to perform the quieres (https://www.npmjs.com/package/mysql2)
- Sequelize package (https://www.npmjs.com/package/sequelize)
- Dotenv package. It stores sensitive data such as user’s MySQL username, password, and database name (https://www.npmjs.com/package/dotenv)
- Argon2 to hash passwords.(https://www.npmjs.com/package/argon2)
- Express (https://www.npmjs.com/package/express)
- Express-handlebars (https://www.npmjs.com/package/express-handlebars) 
- Express-session (https://www.npmjs.com/package/express-session)
  
## Usage
After installing all the packages, open mysql to create the database. Type the following:

DROP DATABASE IF EXISTS budgify_db;
CREATE DATABASE budgify_db;

Then , open the integrated terminal and type "npm run seed", this is to seed data into the database created. Make sure that your port number, user and password from the .env file matches with the one in mysql. 
Once that is done, right click on the server.js file, open the integrated terminal and type "npm start". Server will start running.

Go to your browser and type in the search bar "http://localhost:3001/". The login and signup form will pop up, so user enters their information in the signup form. Then user is redirected to the expense form where they can answer the question, enter the amount, description, and payment schedule. Once it is submited, it will pop up in the rendering expense section". User will have the option to delete the expense if they like.

Link to Heroku: 

## Screenshots

<img width="1439" alt="Screenshot 2023-07-20 at 1 02 07 PM" src="https://github.com/andreaber23/Budgify/assets/128647787/8683a1fa-7cbf-4343-8d5b-2d8d75992ae4">

<img width="1435" alt="Screenshot 2023-07-20 at 1 04 29 PM" src="https://github.com/andreaber23/Budgify/assets/128647787/b2ee9328-1839-4d1a-b114-f198b7675674">

<img width="1435" alt="Screenshot 2023-07-20 at 1 04 47 PM" src="https://github.com/andreaber23/Budgify/assets/128647787/e9e93fdc-37c6-4baf-9c18-94946a0685ba">

## Walkthrough-video

https://drive.google.com/file/d/1p-R4o0LeBC0dZB7tXA-OSpE2k5-e6Z2C/view?usp=sharing

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
If you have any questions reach out to one of us.
Our Github usernames are @andreaber23, @lexmachado, @carolynlupi, @jimen8930, @zwell99
