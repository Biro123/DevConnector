const express = require('express');
const connectDB = require('./config/db');

const app = express();

// COnnect to Database
connectDB();

// Set up an endpoint to return text to browser
app.get('/', (req, res) => res.send('API Running'));

// Set port from cloud if present - OR 5000 locally
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port' + PORT));
