const express = require("express");

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
