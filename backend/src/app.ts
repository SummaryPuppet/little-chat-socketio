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

export default server;
