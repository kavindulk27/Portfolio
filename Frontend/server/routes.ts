import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static assets
  app.use("/attached_assets", (req, res, next) => {
    const filePath = path.join(process.cwd(), req.path);
    res.sendFile(filePath, (err) => {
      if (err) next();
    });
  });

  return createServer(app);
}
