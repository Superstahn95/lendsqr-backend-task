import { Request, Response, NextFunction } from "express";
import asyncErrorHandler from "../utils/asyncErrorHandler";

export const withdrawFundsService = asyncErrorHandler(
  async (req, res, next) => {}
);
