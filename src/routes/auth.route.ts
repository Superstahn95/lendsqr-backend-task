import express, { Request, Response, NextFunction } from "express";
import { registerUserController } from "../controllers/auth.controller";

const app = express();

const router = express.Router();
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send("we hit the auth route");
});

router.post("/register", registerUserController);

export default router;
