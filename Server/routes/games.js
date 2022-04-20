const express = require("express");
const router = express.Router();
const { Games } = require("../models");

router.get("/", async (req, res) => {
  const listOfgames = await Games.findAll();
  res.json(listOfgames);
});

router.post("/", async (req, res) => {
  const game = req.body;
  await Games.create(game);
  res.json(game);
});
module.exports = router;
