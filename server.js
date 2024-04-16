const express = require('express');
require('dotenv').config();
require('./config/db');
const feedbackRoutes = require('./routes/feedback.routes');

const app = express();
const port = process.env.PORT || 3400;

app.use(express.json());

app.use('/api/v1/feedback', feedbackRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log('Server is running on port 3000');
});