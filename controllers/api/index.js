const router = require('express').Router();
const userRoute = require('./userRoute');
const projectRoutes = require('./projectRoutes');

router.use('/users', userRoute);
router.use('/projects', projectRoutes);

