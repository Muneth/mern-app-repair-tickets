const asyncHandler = require('express-async-handler');

// @desc Register a new user
// @route POST /api/users/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //  Validation
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please enter all fields');
  }

  res.status(200).json({
    message: 'User register route'
  });
});

// @desc Login a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'User login route'
  });
});

module.exports = {
  registerUser,
  loginUser
};
