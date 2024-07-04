import express from "express";
import { getUserByWalletIdController } from "../controllers/user.controller";

const router = express.Router();

router.get("/", getUserByWalletIdController);

export default router;
