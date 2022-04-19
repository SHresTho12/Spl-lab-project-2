const express = require("express");
const router = express.Router();
const { childrenInfo } = require("../models");

router.get("/", async (req, res) => {
  const info = await childrenInfo.findAll();
  res.json(info);
});

router.post("/", async (req, res) => {
  const info = req.body;
  await childrenInfo.create(info);
  res.json(info);
});
module.exports = router;
