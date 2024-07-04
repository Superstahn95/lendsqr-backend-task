import asyncErrorHandler from "../utils/asyncErrorHandler";
import db from "../db/db.config";
import { User, AuthenticatedRequestBody, DepositRequest } from "../interfaces";
import { Response, NextFunction } from "express";

export const fundSelfService = asyncErrorHandler(
  async (
    req: AuthenticatedRequestBody<DepositRequest>,
    res: Response,
    next: NextFunction
  ) => {
    const { amount } = req.body;
    const newBalance = req.body.amount + amount;
    await db<User>("users")
      .where({ id: req.user?.id })
      .update({ balance: newBalance });
    res.status(200).json({
      status: "success",
      message: "account funded successfully",
      amountDeposited: amount,
    });
  }
);

export const fundOtherAccountService = asyncErrorHandler(
  async (
    req: AuthenticatedRequestBody<DepositRequest>,
    res: Response,
    next: NextFunction
  ) => {
    const { amount, walletId } = req.body;
    if (!req.user) {
      return;
    }
    if (amount > req.user?.balance) {
      //return an error
    }
    const user = await db<User>("users").where({ wallet_id: walletId }).first();
    if (!user) {
      // throw error
    } else {
      const newBalance = user?.balance + amount;
      const newSelfBalance = req.user?.balance - amount;
      //debit user sending funds
      await db<User>("users")
        .where({ id: req.user?.id })
        .update({ balance: newSelfBalance });
      await db<User>("users")
        .where({ wallet_id: walletId })
        .update({ balance: newBalance });
      res.status(200).json("account funded");
    }
  }
);
