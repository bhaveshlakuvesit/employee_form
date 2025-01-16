const express = require('express');
const router = express.Router();
const { registerEmployee } = require('../controllers/employeeController');

// POST route to register an employee
router.post('/register', registerEmployee);

module.exports = router;
