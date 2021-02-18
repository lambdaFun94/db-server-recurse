import express from "express";
const app = express();

// In memory datastore
let db = {};

// Check if server responds to requests and send snapshot of db
app.get("/", (req, res, next) => {
  res.json({ success: true, db });
});

// Set key-value pairs in db from arbitrary query parameters
app.get("/set", (req, res, next) => {
  const keys = Object.keys(req.query);
  keys.forEach((key) => (db[key] = req.query[key]));
  res.send(db);
});

// Respond with value corresponding to "key" query parameter
app.get("/get", (req, res, next) => {
  res.send(db[req.query.key]);
});

// Spin up server on port 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Listening in ${process.env.NODE_ENV} on ${PORT}`);
});
