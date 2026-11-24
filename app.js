import express from "express";

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

export default app;
