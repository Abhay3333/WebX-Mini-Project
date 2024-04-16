const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    question1: {
        type: String,
        enum: ['Option 1', 'Option 2', 'Option 3'],
        required: true
    },
    question2: {
        type: String,
        enum: ['Option A', 'Option B', 'Option C'],
        required: true
    },
    question3: {
        type: String,
        enum: ['Choice X', 'Choice Y', 'Choice Z'],
        required: true
    },
    question4: {
        type: String,
        enum: ['Selection 1', 'Selection 2', 'Selection 3'],
        required: true
    },
    additionalFeedback: {
        type: String,

    }

});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;