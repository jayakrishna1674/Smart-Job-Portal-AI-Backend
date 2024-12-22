require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const jobRoutes = require('./routes/jobs');
const chatRoutes = require('./routes/chat');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use('/jobs', jobRoutes);
app.use('/chat', chatRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
