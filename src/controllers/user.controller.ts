import { Request, Response, NextFunction } from "express";
import { getUserByWalletIdService } from "../services/user.service";

export const getUserByWalletIdController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getUserByWalletIdService(req, res, next);
};
