/*
 * Database Server for Recurse Center Application
 * Applicant: Andrew Sanchez
 * Date: 19 February 2021
 *
 */

import express from "express";
const app = express();

// In memory datastore
let db = {};

// Check if server responds to requests and send snapshot of db
app.get("/", (req, res, next) => {
  res.status(200).json({ success: true, data: db });
});

// Set key-value pairs in db from arbitrary query parameters
app.get("/set", (req, res, next) => {
  try {
    const keys = Object.keys(req.query);
    keys.forEach((key) => (db[key] = req.query[key]));
    res.status(200).json({ success: true, data: db });
  } catch (err) {
    process.env.NODE_ENV === "development" && console.error(err);
    next(err);
  }
});

// Respond with value corresponding to "key" query parameter
app.get("/get", (req, res, next) => {
  try {
    const data = db[req.query.key];
    data
      ? res.status(200).json({ success: true, data })
      : res.status(404).json({ success: false, data: "Key not found" });
  } catch (err) {
    process.env.NODE_ENV === "development" && console.error(err);
    next(err);
  }
});

// Handle Not Found
app.use((err, res, next) => {
  res.status(404);
  next(new Error("Resource not found"));
});

// Handle Errors
app.use((error, req, res, next) => {
  res.send(res.statusCode || 500).json({ success: "false", error });
});

// Spin up server on port 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Listening in ${process.env.NODE_ENV} on ${PORT}`);
});
