const sequelize = require('../config/connection');
const { User, Expense} = require('../model');

const userData = require('./userData.json');
const expenseData = require('./expenseData.json');

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
  }

  process.exit(0);
};

seedDatabase();
