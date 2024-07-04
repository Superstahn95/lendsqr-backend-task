import { Request, Response, NextFunction } from "express";
import db from "../db/db.config";
import { User } from "../interfaces";
import asyncErrorHandler from "../utils/asyncErrorHandler";

interface IAuthRequest extends Request {
  user?: User;
}

export const isAuth = asyncErrorHandler(
  async (req: IAuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization; //Bearer Token
    const token = authHeader?.split(" ")[1];
    if (!token) {
      // throw an error
    }
    const user = await db<User>("users").where({ token }).first();
    if (!user) {
      // return an error
    }
    //trying to assign a value to req.user but getting a flag that property user does not exist on the req object
    req.user = user;
    next();
  }
);
