const express = require('express');
const router = express.Router();

// User registration route
router.post('/register', (req, res) => {
    // Logic for user registration
    res.send('User registered');
});

// User login route
router.post('/login', (req, res) => {
    // Logic for user login
    res.send('User logged in');
});

module.exports = router;
