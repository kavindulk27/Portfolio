import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve CV PDF file
  app.use('/attached_assets', (req, res, next) => {
    const filePath = path.join(process.cwd(), req.path);
    res.sendFile(filePath, (err) => {
      if (err) {
        next();
      }
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
