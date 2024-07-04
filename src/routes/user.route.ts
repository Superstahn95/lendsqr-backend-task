import express from "express";
import { getUserByWalletIdController } from "../controllers/user.controller";

const router = express.Router();

router.post("/generateuser", getUserByWalletIdController);

export default router;
