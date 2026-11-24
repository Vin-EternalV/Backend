import express from "express";

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

import userRoutes from "./routes/user_route.js";
// Use the imported routes
app.use("/api/users", userRoutes);

export default app;
