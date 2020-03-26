const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const User = require('../../models/User');

// @route   GET api/auth
// @desc    Test rout
// @access  Public
router.get('/', auth, async (req, res) => {
  try {
    // find the user in the database with the id from the token
    // as decoded in auth middleware. Exclude password from db read
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
