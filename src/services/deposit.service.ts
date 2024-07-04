import asyncErrorHandler from "../utils/asyncErrorHandler";
import db from "../db/db.config";
import { User } from "../models/user.model";
import { Request, Response, NextFunction } from "express";

export const fundSelfService = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    //auth middleware should check for the user
    //  const {amount} = req.body
    //  await db<User>("users").where({id:req.user.id}).update({})
  }
);

export const fundOtherAccountService = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { amount, walletId } = req.body;
    const user = await db<User>("users").where({ wallet_id: walletId }).first();
    if (!user) {
      // throw error
    }
    const newBalance = user?.balance + amount;
    await db<User>("users")
      .where({ wallet_id: walletId })
      .update({ balance: newBalance });
    res.status(200).json("account funded");
  }
);
