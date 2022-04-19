const express = require("express");
const router = express.Router();
const { childrenTakeQuizzes } = require("../models");

router.get("/", async (req, res) => {
  const listOfQuizzesTaken = await childrenTakeQuizzes.findAll();
  res.json(listOfQuizzesTaken);
});

router.post("/", async (req, res) => {
  const quizTaken = req.body;
  await childrenTakeQuizzes.create(quizTaken);
  res.json(quizTaken);
});
module.exports = router;
