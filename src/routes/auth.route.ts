import express, { Request, Response, NextFunction } from "express";
import {
  registerUserController,
  loginController,
} from "../controllers/auth.controller";

const app = express();

const router = express.Router();

router.post("/register", registerUserController);
router.post("/login", loginController);

export default router;
