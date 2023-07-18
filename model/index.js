const User = require('./User');
const Expense = require('./Expense');
const Comment = require("./Comment")

User.hasMany(Expense, {
    foreignKey: 'user_id',
    onnDelete: 'CASCADE'
});

Expense.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  
Comment.belongsTo(User, {
    foreignKey: 'user_id',
  });
  
Expense.hasMany(Comment, {
    foreignKey: 'expense_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(Expense, {
    foreignKey: 'expense_id',
    });

module.exports = { User, Expense, Comment };

let templates = {};
let routes = {};