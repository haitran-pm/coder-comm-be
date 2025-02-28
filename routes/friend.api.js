const express = require("express");
const router = express.Router;

/**
 * @route POST /friends/requests - Send a friend request
 * @route GET /friends/requests/incoming - Get the list of received pending requests
 * @route GET /friends/requests/outgoing - Get the list of sent pending requests
 * @route PUT /friends/requests/:userId - Accept/ Reject a received pending requests
 * @route GET /friends - Get the list of friends
 * @route DELETE /friends/requests/:userId - Cancel a friend request
 * @route DELETE /friends/:userId - Remove a friend
 *
 * **/

module.exports = router;
