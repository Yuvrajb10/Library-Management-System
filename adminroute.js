const express = require('express');
const router = express.Router();

// Hardcoded credentials for demonstration
const adminCredentials = {
  userId: 'adm',
  password: 'adm'
};

router.post('/login', (req, res) => {
  const { userId, password } = req.body;

  if (userId === adminCredentials.userId && password === adminCredentials.password) {
    return res.json({ success: true, message: 'Login successful' });
  } else {
    return res.json({ success: false, message: 'Invalid credentials' });
  }
});


// Admin Logout Route
router.get('/logout', (req, res) => {
    // Clear the session or authentication token (if applicable)
    res.json({ success: true, message: 'Logged out successfully' });
  });
  
  module.exports = router;