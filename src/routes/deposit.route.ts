import express from "express";
import {
  fundOtherAccountController,
  fundSelfController,
} from "../controllers/deposit.controller";

const router = express.Router();

//include authentication middleware
router.post("/", fundSelfController);
router.post("/funduser", fundOtherAccountController);

export default router;
