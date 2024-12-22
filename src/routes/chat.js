const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// ChatGPT API Route
router.post('/', chatController.handleChat);

module.exports = router;
