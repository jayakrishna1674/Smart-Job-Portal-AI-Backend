require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const jobRoutes = require('./routes/jobs');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use('/jobs', jobRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
