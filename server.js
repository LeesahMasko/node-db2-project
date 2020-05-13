const express = require("express");
const cars = require('./cars/carsRouter');
const db = require("./data/dbConfig.js");

const server = express();

server.use(express.json());
// server.use("/api/cars")
server.use("/api/cars", cars);


server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
