const sequelize = require('../config/connection');
const { User, Expense, Comment } = require('../model');

const userData = require('./userData.json');
const expenseData = require('./expenseData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const expense of expenseData) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const newExpense = await Expense.create({
      ...expense,
      user_id: randomUser.id,
    });

    for (const comment of commentData) {
      const randomExpense = Math.floor(Math.random() * expenseData.length);
      await Comment.create({
        ...comment,
        user_id: randomUser.id,
        expense_id: newExpense.id,
      });
    }
  }

  process.exit(0);
};

seedDatabase();
