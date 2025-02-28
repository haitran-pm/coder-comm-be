const express = require("express");
const router = express.Router;

/**
 * @route POST /posts - Create a new post
 * @route GET /posts/user/:userId?page=1&limit=10 - Get posts with pagination
 * @route GET /posts/:id - Get details of a post
 * @route PUT /posts/:id - Update a post
 * @route DELETE /posts/:id - Remove a post
 * @route GET /posts/:id/comments - Get list of comments of a post
 *
 * **/

module.exports = router;
