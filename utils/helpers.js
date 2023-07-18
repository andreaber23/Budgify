module.exports = {
    get_monthly_expenses: (userData) => {
      const userExpenses = Expense.findAll({
        where: {user_id: userData.id},
        include: {attributes: ['amount', 'paymentSchedule']}
      });
      
      var totalMonthlyExpenses = 0;
      for (let i = 0; i < userExpenses.length; i++) {
        if (userExpenses[i].paymentSchedule == "monthly") {
          totalMonthlyExpenses += userExpenses[i].amount;
        }
      }

      return parseInt(totalMonthlyExpenses).toLocaleString();
    },
    get_annual_expenses: (userData) => {
      const userExpenses = Expense.findAll({
        where: {user_id: userData.id},
        include: {attributes: ['amount', 'paymentSchedule']}
      });
      
      var totalAnnualExpenses = 0;
      for (let i = 0; i < userExpenses.length; i++) {
        if (userExpenses[i].paymentSchedule == "monthly") {
          totalAnnualExpenses += (userExpenses[i].amount * 12);
        } else {
          totalAnnualExpenses += (userExpenses[i].amount);
        }
      }

      return parseInt(totalAnnualExpenses).toLocaleString();
    },
  };
  