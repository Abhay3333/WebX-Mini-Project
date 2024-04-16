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