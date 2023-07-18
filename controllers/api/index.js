const router = require('express').Router();
const userRoute = require('./userRoute');
const projectRoutes = require('./projectRoutes');
const { Model } = require('sequelize');

router.use('/users', userRoute);
router.use('/projects', projectRoutes);

module.exports = router