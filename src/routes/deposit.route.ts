import express from "express";
import {
  fundOtherAccountController,
  fundSelfController,
} from "../controllers/deposit.controller";
import { isAuth } from "../middlewares/authMiddleware";

const router = express.Router();

//include authentication middleware
router.post("/", isAuth, fundSelfController);
router.post("/funduser", isAuth, fundOtherAccountController);

export default router;
