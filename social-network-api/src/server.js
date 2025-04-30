const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const db = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/api', routes);
app.use('*', (req, res) => {
    res.status(404).send('404 Not Found');
});
// Database connection
//await db();
db();
/*
db('once', () => {
    console.log('Database connection established');
    // Start the server
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});
*/
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});