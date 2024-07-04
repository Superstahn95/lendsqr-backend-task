import { Request, Response, NextFunction } from "express";
import {
  fundOtherAccountService,
  fundSelfService,
} from "../services/deposit.service";

export const fundOtherAccountController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
export const fundSelfController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
