const express = require("express");
const router = express.Router();
const { childrenPlayGames } = require("../models");

router.get("/", async (req, res) => {
  const listOfgamesPlayed = await childrenPlayGames.findAll();
  res.json(listOfgamesPlayed);
});

router.post("/", async (req, res) => {
  const gamePlayed = req.body;
  await childrenPlayGames.create(gamePlayed);
  res.json(gamePlayed);
});
module.exports = router;
