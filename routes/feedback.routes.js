const express = require('express');
const router = express.Router();
const { submitFeedback, getFeedbacks, getFeedbackById } = require('../controller/feedback.controller');

router.post('/submit', submitFeedback);
router.get('/get', getFeedbacks);
router.get('/get/:id', getFeedbackById);


module.exports = router;