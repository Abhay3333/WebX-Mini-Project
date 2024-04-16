const nodemailer = require('nodemailer');
require('dotenv').config();

const sendFeedbackEmail = async(feedbackData) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_ADDRESS,
            pass: process.env.GMAIL_PASSWORD
        }
    });

    let mailOptions = {
        from: process.env.GMAIL_ADDRESS,
        to: feedbackData.email,
        subject: 'Feedback Submission',
        html: `
            <h1>Feedback Details</h1>
            <p><strong>Question 1:</strong> ${feedbackData.question1}</p>
            <p><strong>Question 2:</strong> ${feedbackData.question2}</p>
            <p><strong>Question 3:</strong> ${feedbackData.question3}</p>
            <p><strong>Question 4:</strong> ${feedbackData.question4}</p>
            <p><strong>Additional Feedback:</strong> ${feedbackData.additionalFeedback}</p>
        `
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = sendFeedbackEmail;