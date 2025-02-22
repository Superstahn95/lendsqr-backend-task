import { Request, Response, NextFunction } from "express";
import {
  fundOtherAccountService,
  fundSelfService,
} from "../services/deposit.service";
import { DepositRequest } from "../interfaces";
import { AuthenticatedRequestBody } from "../interfaces/CustomTypes";

export const fundOtherAccountController = (
  req: AuthenticatedRequestBody<DepositRequest>,
  res: Response,
  next: NextFunction
) => {
  fundOtherAccountService(req, res, next);
};
export const fundSelfController = (
  req: AuthenticatedRequestBody<DepositRequest>,
  res: Response,
  next: NextFunction
) => {
  fundSelfService(req, res, next);
};
