const express = require('express');
const router = express.Router();

// Hardcoded credentials for demonstration
const userCredentials = {
  userId: 'user',
  password: 'user'
};

router.post('/login', (req, res) => {
  const { userId, password } = req.body;

  if (userId === userCredentials.userId && password === userCredentials.password) {
    return res.json({ success: true, message: 'Login successful' });
  } else {
    return res.json({ success: false, message: 'Invalid credentials' });
  }
});
// User Logout Route
router.get('/logout', (req, res) => {
    // Clear the session or authentication token
    res.json({ success: true, message: 'Logged out successfully' });
  });

module.exports = router;
