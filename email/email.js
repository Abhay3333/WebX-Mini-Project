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
            <div style="font-family: Arial, sans-serif; background-color: #f8f8f8; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <h1 style="color: #333; text-align: center; margin-bottom: 30px;">Feedback Details</h1>
                <div style="background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                    <p style="color: #333; font-size: 16px; margin-bottom: 10px;"><strong style="color: #ff6600;">Question 1:</strong> ${feedbackData.question1}</p>
                    <p style="color: #333; font-size: 16px; margin-bottom: 10px;"><strong style="color: #ff6600;">Question 2:</strong> ${feedbackData.question2}</p>
                    <p style="color: #333; font-size: 16px; margin-bottom: 10px;"><strong style="color: #ff6600;">Question 3:</strong> ${feedbackData.question3}</p>
                    <p style="color: #333; font-size: 16px; margin-bottom: 10px;"><strong style="color: #ff6600;">Question 4:</strong> ${feedbackData.question4}</p>
                    <p style="color: #333; font-size: 16px; margin-bottom: 10px;"><strong style="color: #ff6600;">Additional Feedback:</strong> ${feedbackData.additionalFeedback || 'N/A'}</p>
                </div>
                <p style="text-align: center; margin-top: 20px; color: #666;">Thank you for your valuable feedback!</p>
            </div>
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