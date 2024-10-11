// Import express
const express = require('express');

// Create an instance of an Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define a port number
const PORT = process.env.PORT || 3000;

// Simple GET endpoint
app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

// Simple GET endpoint that returns data
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];
  res.json(users);
});

// Simple POST endpoint to create a new user
app.post('/api/users', (req, res) => {
  const newUser = {
    id: req.body.id,
    name: req.body.name,
  };
  res.status(201).json(newUser); // 201 status code means "created"
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

