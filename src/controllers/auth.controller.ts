import { NextFunction, Request, Response } from "express";
import { registerUserService } from "../services/auth.service";

export const registerUserController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  registerUserService(req, res, next);
};
