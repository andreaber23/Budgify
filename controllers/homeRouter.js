const router = require('express').Router();
const { User, Expense } = require('../model');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Expense}],
    });

    const user = userData.get({ plain: true });

    // Get all projects and JOIN with user data
    const expenseData = await Expense.findAll({
      include: [
        {
          model: User,
          attributes: ['first_name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const expenses = expenseData.map((expense) => expense.get({ plain: true }));

    console.log(expenses)
    res.render('profile', {
      expenses: expenses,
      logged_in: true,
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
