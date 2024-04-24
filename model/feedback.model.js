const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    question1: {
        type: String,
        enum: ['1', '2', '3'],
        required: true
    },
    question2: {
        type: String,
        enum: ['1', '2', '3'],
        required: true
    },
    question3: {
        type: String,
        enum: ['1', '2', '3'],
        required: true
    },
    question4: {
        type: String,
        enum: ['1', '2', '3'],
        required: true
    },
    additionalFeedback: {
        type: String,

    }

});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;