require('dotenv').config();
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const jobRoutes = require('./routes/jobs');
const chatRoutes = require('./routes/chat');
const app = express();

//enabling cross origin
app.use(cors());
// Middleware
app.use(bodyParser.json());
app.use('/jobs', jobRoutes);
app.use('/chat', chatRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
