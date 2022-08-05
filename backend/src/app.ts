import express from "express";

const app = express();
import http from "http";
const server = http.createServer(app);
import dotenv from "dotenv";
dotenv.config();

app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.send("No pages");
});

app.get("/chat", (_req, res) => {
  res.redirect("/");
});

export default server;
