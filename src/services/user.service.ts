import { Request, Response, NextFunction } from "express";
import asyncErrorHandler from "../utils/asyncErrorHandler";
import db from "../db/db.config";

export const getUserByWalletIdService = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { walletId } = req.body;
    const user = await db("users").where({ wallet_id: walletId });
    if (!user) {
      //return an error
      return res.send("something went wrong");
    }
    res.status(200).send(user[0].name);
  }
);
