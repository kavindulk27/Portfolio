import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import { VercelRequest, VercelResponse } from '@vercel/node';

const app = express();

// Example API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from serverless!" });
});

// Serve React static files (for production)
const clientPath = path.join(process.cwd(), "dist");
app.use(express.static(clientPath));
app.get("*", (_req, res) => {
  res.sendFile(path.join(clientPath, "index.html"));
});

export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res);
};
