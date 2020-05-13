const express = require("express");
const db = require("../data/dbConfig");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const cars = await db
      .select("*")
      .from("cars");
    res.json(cars);
  } catch(err) {
    next(err);
  }
});

router.get("/:VIN", async (req, res, next) => {
  try {
    const cars = await db("cars")
    .where({VIN: req.params.VIN})
    .first()
    res.json(cars)

  } catch(err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const vin = await db("cars").insert(req.body);
    const newCar = await db("cars").where({VIN: vin[0]}).first();
    res.status(201).json(newCar);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
