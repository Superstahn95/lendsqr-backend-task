import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res, next) => {
  res.status(200).json("Node and typescript running");
});

app.use("/api/v1/auth", authRoute);

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
