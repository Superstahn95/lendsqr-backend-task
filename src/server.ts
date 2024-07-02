import express from "express";

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res, next) => {
  res.status(200).json("Node and typescript running");
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
