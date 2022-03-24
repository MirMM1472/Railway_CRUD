const mongoose = require("mongoose");
const db = require("./models");

(async () => {
  try {
    const trains = await db.trains.find();
    console.log(trains);
    process.exit();
  } catch (err) {
    console.log(err.message);
  }
})();
