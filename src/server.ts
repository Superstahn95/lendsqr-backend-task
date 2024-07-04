import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route";
import userRoute from "./routes/user.route";
import depositRoute from "./routes/deposit.route";
import withdrawalRoute from "./routes/withdrawal.route";
import { errorHandler } from "./middlewares/errrorMiddleware";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res, next) => {
  res.status(200).json("Node and typescript running");
});

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/deposit", depositRoute);
app.use("/api/v1/deposit", withdrawalRoute);

app.use(errorHandler);
app.listen(port, () => {
  console.log(`server running on ${port}`);
});
