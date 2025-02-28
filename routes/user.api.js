const express = require("express");
const router = express.Router;

/**
 * @route POST /users - Register a new account
 * @route GET /users?page=1&limit=10 - Get users with pagination
 * @route GET /users/me - Get current user info
 * @route GET /users/:id - Get a user profile
 * @route PUT /users/:id - Update a user profile
 *
 * **/

module.exports = router;
