const router = require('express').Router();
const { Expense } = require('../../model');
const withAuth = require('../../utils/auth');

router.post ("/", withAuth, async (req, res) => {
    try {
        const newExpense = await Expense.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newExpense);
    } catch (err) {
        res.status(400).json(err);
    }
});

// to update expense
router.put("/:id", async (req,res) => {
    try {
        const updateExpense = await Comment.update(req.body, {
            where:{
                id: req.params.id
            },
        })
        
        if (!updateExpense[0]){
            res.status(400).json({ message: "No expense found with this id!" });
      return;
        }
        console.log("expense was updated");
        res.status(200).json(updateExpense);
        return;
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
      }
  })

router.delete("/:id", withAuth, async (req,res) => {
    try {
        const expenseData = await Expense.destroy({
        where: {
            id: req.params.id,
            user_id:req.session.user_id,
        }
    });
    if (!expenseData) {
        res.status(404).json({ message: "No expense found with this id"});
        return;
    }
    res.status(200).json(expenseData);
} catch (err) {
    res.status(500).json(err)
}
});

module.exports = router