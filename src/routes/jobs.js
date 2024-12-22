const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

// Admin Operations
router.post('/', jobController.addJob);
router.get('/', jobController.getJobs);
//get job by location


// Candidate Operations
router.post('/apply', jobController.applyForJob);

module.exports = router;
