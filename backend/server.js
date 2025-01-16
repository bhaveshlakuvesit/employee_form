const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API routes
app.use('/api/employees', employeeRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
