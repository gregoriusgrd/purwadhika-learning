import dotenv from "dotenv";

import express, { Request, Response, NextFunction } from "express";

import userRoute from "./route/user.route";

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// Routing
app.use("/api/auth", userRoute);

// Default Route
app.get("/", (req, res) => {
  res.json({ message: "Server running 🚀" });
});

// Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ error: err.message });
});

// Start Server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
