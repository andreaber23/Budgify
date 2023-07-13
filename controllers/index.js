const router = require('express').Router();

const apiRoutes = require('./api');
const homeRouter = require('./homeRouter');

router.use('/', homeRouter);
router.use('/api', apiRoutes);

module.exports = router;