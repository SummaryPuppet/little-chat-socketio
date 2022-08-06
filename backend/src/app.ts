import express from "express";

const app = express();
import http from "http";
const server = http.createServer(app);
import dotenv from "dotenv";
dotenv.config();

app.use(express.json());
app.use(express.static("public"));

app.get("/chat", (_req, res) => {
  res.redirect("/");
});

app.use((_req, res, next) => {
  if (res.status(404)) {
    res.redirect("/");
  } else {
    next();
  }
});

export default server;
