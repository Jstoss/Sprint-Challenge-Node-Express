const express = require('express');

const actionRoutes = require('./actions/actionRoutes');
const projectRoutes = require('./projects/projectRoutes');

const router = express.Router();

router.use('/project', projectRoutes);
router.use('/action', actionRoutes);

module.exports = router;
