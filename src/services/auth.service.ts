import { Request, Response, NextFunction } from "express";
import db from "../db/db.config";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
import asyncErrorHandler from "../utils/asyncErrorHandler";

export const registerUserService = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, firstName, lastName, password, confirmPassword } = req.body;
    // check password
    if (password !== confirmPassword) {
      next(new Error("passwords do not match"));
    }

    const prevUser = await db("users").where({ email });
    if (prevUser) {
      // send error to error middleware
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //check karma for customer using email address

    //generate random wallet id
    const walletId = uuidv4();
    //hash user password
    //create user
    const user = await db("users").insert({
      email,
      first_name: firstName,
      last_name: lastName,
      wallet_id: walletId,
      password: hashedPassword,
    });

    res.status(200).json("registration succesful");
  }
);

export const loginService = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    const users = await db("users").where({ email });
    if (!users) {
      return res.send("no users found");
    }
    const isPasswordMatch = await bcrypt.compare(password, users[0].password);
    if (!isPasswordMatch) {
      //throw an error
      return res.send("Invalid credentials");
    }
    //generate random token
    res.status(200).json({
      token: "566789466784",
      user: users[0],
    });
  }
);
