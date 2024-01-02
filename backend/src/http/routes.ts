import { Router } from "express";

const router = Router();

router.get("/", async (request, response) => {
  response.json({ message: "Welcome to world of saas" });
});

export default router;
