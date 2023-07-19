const router = require('express').Router();
const userRoute = require('./userRoute');
const projectRoutes = require('./projectRoutes');
const expensesRoutes = require("./expensesRoutes");


router.use('/users', userRoute);
router.use('/projects', projectRoutes);
router.use("/expenses", expensesRoutes);

module.exports = router