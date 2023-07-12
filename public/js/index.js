const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Set Handlebars as the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// ...Other server setup code...
