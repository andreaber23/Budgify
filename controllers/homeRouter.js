const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Retrieve any necessary data for rendering the homepage
  const data = { logged_in: true };

  // Render the homepage.handlebars template
  res.render('homepage', data);
});

// ...Other routes...

module.exports = router;
