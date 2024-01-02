import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

import routes from "./http/routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "development") app.use(require("morgan")("dev"));

app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if ((err.message = "access denied")) {
      response.status(403);
      response.json({ error: err.message });
    }
    next(err);
  }
);

export default app;
