var express = require("express");
var router = express.Router();

const db = require("../models");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET home page. */
router.get("/list", async function (req, res, next) {
  const trains = await db.trains.find();
  res.status(200).json(trains);
  // res.render('index', { title: 'Express', trains });
});

router.get("/Save", async function (req, res, next) {
  console.log(req.query);
  const results = await db.trains.insertMany(req.query);
  console.log(results);
  res.status(200).json(results);
  // res.render("index", { title: "Express" });
});

module.exports = router;
