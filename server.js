const express = require('express');
const connectDB = require('./config/db');

const app = express();

// COnnect to Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Set up an endpoint to return text to browser
app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// Set port from cloud if present - OR 5000 locally
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port' + PORT));
