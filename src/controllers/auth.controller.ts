import { NextFunction, Request, Response } from "express";
import { registerUserService, loginService } from "../services/auth.service";

export const registerUserController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  registerUserService(req, res, next);
};

export const loginController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  loginService(req, res, next);
};
