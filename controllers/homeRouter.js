const router = require('express').Router();
const { User, Expense } = require('../model');
const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
  try {
    const categories = ['Income', 'Monthly Expenses', 'Savings/Stocks/Investments', 'Entertainment', 'Travel', 'Shopping', 'Miscellaneous']; // Example data, replace with your actual data
    const budgetSections =[]
    
    res.render("homepage", {
      categories,
      budgetSections,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Expense}],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      name: user.first_name,
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
