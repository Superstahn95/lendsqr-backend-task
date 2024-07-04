import { Request, Response, NextFunction } from "express";
import asyncErrorHandler from "../utils/asyncErrorHandler";
import { AuthenticatedRequestBody, WithdrawRequest, User } from "../interfaces";
import db from "../db/db.config";

export const withdrawFundsService = asyncErrorHandler(
  async (
    req: AuthenticatedRequestBody<WithdrawRequest>,
    res: Response,
    next: NextFunction
  ) => {
    //debit user account
    const { amount } = req.body;
    if (!req.user) {
      return;
    }
    // check if amount applied is greater than balance
    if (amount > req.user?.balance) {
      // return an error
    }
    await db<User>("users").where({ id: req.user?.id }).update({});
    res.status(200).json({
      status: "success",
      message: "withdrawal successful",
    });
  }
);
