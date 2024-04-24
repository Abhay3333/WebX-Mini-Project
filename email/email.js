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
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f9f9f9;
                        color: #333;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        background-color: #fff;
                        border-radius: 8px;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        color: #e91e63;
                        border-bottom: 2px solid #e91e63;
                        padding-bottom: 10px;
                        text-align: center;
                    }
                    p {
                        margin-bottom: 10px;
                        color: #666;
                    }
                    strong {
                        font-weight: bold;
                        color: #2196f3;
                    }
                    .additional-feedback {
                        background-color: #f3f3f3;
                        padding: 10px;
                        border-radius: 5px;
                        margin-top: 20px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Feedback Details</h1>
                    <p><strong>Rate College Infrastructure:</strong> ${feedbackData.question1}</p>
                    <p><strong>Rate Education Quality:</strong> ${feedbackData.question2}</p>
                    <p><strong>Rate College Placement:</strong> ${feedbackData.question3}</p>
                    <p><strong>Rate College Canteen:</strong> ${feedbackData.question4}</p>
                    <div class="additional-feedback">
                        <strong>Additional Feedback:</strong>
                        <p>${feedbackData.additionalFeedback}</p>
                    </div>
                </div>
            </body>
            </html>
        `
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = sendFeedbackEmail;