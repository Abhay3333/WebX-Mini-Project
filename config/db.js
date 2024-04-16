const mongoose = require('mongoose');
require('dotenv').config();

const db = process.env.MONGO_URL;

mongoose.connect(db)
    .then(() => console.log('Hurrah! MongoDB Connected...'))
    .catch(err => console.log(err));