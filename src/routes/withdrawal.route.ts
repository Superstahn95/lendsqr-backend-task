import express from "express";
import { withdrawFundsController } from "../controllers/withdrawal.controller";
import { isAuth } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/", isAuth, withdrawFundsController);

export default router;
