const express = require("express");

const db = require("./data/db-config");

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then(car => res.json(car))
    .catch(err =>
      res.status(500).json({ message: "Cant get cars", error: err })
    );
});

router.post("/", (req, res) => {
  const carBody = req.body;

  db("cars")
    .insert(carBody)
    .then(car => res.status(201).json(car))
    .catch(err =>
      res.status(500).json({ message: "Cant make entry", error: err })
    );
});

module.exports = router;
