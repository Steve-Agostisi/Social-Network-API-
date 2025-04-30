const express = require('express');
const userRoutes = require('./api/userRoutes.js');
const thoughtRoutes = require('./api/thoughtRoutes.js');

const router = express.Router();

// Define routes
// this routes is prefixed with '/api'
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;