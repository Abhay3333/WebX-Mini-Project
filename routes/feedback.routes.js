const express = require('express');
const router = express.Router();
const { submitFeedback } = require('../controller/feedback.controller');

router.post('/submit', submitFeedback);

module.exports = router;