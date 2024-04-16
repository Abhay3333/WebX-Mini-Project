const Feedback = require('../model/feedback.model');
const sendFeedbackEmail = require('../email/email');

exports.submitFeedback = async(req, res) => {
    try {
        const { question1, question2, question3, question4, email, additionalFeedback } = req.body;

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        const feedback = new Feedback({
            question1,
            question2,
            question3,
            question4,
            email,
            additionalFeedback
        });

        await feedback.save();

        await sendFeedbackEmail({
            question1,
            question2,
            question3,
            question4,
            email,
            additionalFeedback
        });

        res.status(201).json({ message: 'Feedback submitted successfully' });
    } catch (error) {
        console.error('Error submitting feedback:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.getFeedbacks = async(req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.status(200).json(feedbacks);
    } catch (error) {
        console.error('Error getting feedbacks:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getFeedbackById = async(req, res) => {
    try {
        const feedbackId = req.params.id;
        const feedback = await Feedback.findById(feedbackId);

        if (!feedback) {
            return res.status(404).json({ error: 'Feedback not found' });
        }

        res.status(200).json(feedback);
    } catch (error) {
        console.error('Error getting feedback by ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};