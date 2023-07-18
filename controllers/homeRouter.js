const router = require('express').Router();
const { Expense, Comment } = require('../model');
const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
  try {
    const categories = ['Income', 'Monthly Expenses', 'Savings/Stocks/Investments', 'Entertainment', 'Travel', 'Shopping', 'Miscellaneous']; // Example data, replace with your actual data
    const budgetSections = ['', '', '']; // Example data, replace with your actual data
    const blogPost = {}; // Example data, replace with your actual data
    const comments = [];
    res.render("homepage", {
      categories,
      budgetSections,
      blogPost,
      comments,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get("/login", async (req, res) => {
  res.render("login");
});

// POST /expenses - Expense form handler
router.post('/expenses', async (req, res) => {
  try {
    const { category, amount, date, description, paymentSchedule } = req.body;

    // Validate the form data
    if (!category || !amount || !date || !description || !paymentSchedule) {
      return res.status(400).json({ message: 'All fields are required'});
    }

    // Create a new Expense instance with the form data
    const newExpense = await Expense.create({
      category,
      amount,
      date,
      description,
      paymentSchedule,
      user_id: req.session.user_id, // Assuming you have a user ID associated with the expense
    });

    // Return a success response
    return res.status(200).json({ message: 'Expense submitted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to submit expense' });
  }
});


// DELETE /budgetSections/:category - Budget section delete button handler
router.delete('/budgetSections/:category', async (req, res) => {
  try {
    // Retrieve the category from the request parameters
    const { category } = req.params;

    // Find the budget section in the database
    const budgetSection = await BudgetSection.findOne({ category });

    // If the budget section is found, delete it
    if (budgetSection) {
      await budgetSection.remove();
      return res.status(200).json({ message: 'Budget section deleted successfully' });
    } else {
      return res.status(404).json({ message: 'Budget section not found' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to delete budget section' });
  }
});

// POST /comments - Comment form handler
router.post('/comments', async (req, res) => {
  try {
    const { name, comment, comment_post } = req.body;

    // Validate the form data
    if (!name || !comment || !comment_post) {
      return res.status(400).json({ message: 'Name, comment, and comment_post are required' });
    }

    // Process the comment data and save it to the database
    const newComment = await Comment.create({ name, comment, comment_post });

    // Return a success response
    return res.status(201).json(newComment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to submit comment' });
  }
});

module.exports = router;
