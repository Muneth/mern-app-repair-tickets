const express = require('express');
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/errorMiddleware');
const PORT = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(express.json());

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Support Desk API' });
});

// Routes
app.use('/api/users', require('./routes/userRoutes'));

// Error handler
app.use(errorHandler.errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});