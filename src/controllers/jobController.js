const db = require("../cofig/db");
const { isObjectEmpty } = require("../utils/commonhelpers");

// Add a new job listing
exports.addJob = (req, res) => {
  const { title, description, location, salary, contact_email } = req.body;
  const query = `INSERT INTO jobs (title, description, location, salary, contact_email) VALUES (?, ?, ?, ?, ?)`;
  db.query(
    query,
    [title, description, location, salary, contact_email],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res
        .status(201)
        .json({ message: "Job added successfully", jobId: result.insertId });
    }
  );
};

// Fetch all jobs
exports.getJobs = (req, res) => {
  console.log(req.query);
  if (!isObjectEmpty(req.query)) {
    const { location } = req.query;
    db.query(
      `SELECT * FROM jobs WHERE location = '${location}'`,
      (err, results) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
      }
    );
  } else {
    db.query("SELECT * FROM jobs", (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json(results);
    });
  }
};

// Apply for a job
exports.applyForJob = (req, res) => {
  const { job_id, candidate_name, contact } = req.body;
  const query = `INSERT INTO applications (job_id, candidate_name, contact) VALUES (?, ?, ?)`;
  db.query(query, [job_id, candidate_name, contact], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: "Application submitted successfully" });
  });
};
