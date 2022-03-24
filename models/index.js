const mongoose = require("mongoose");

(async () => {
  await mongoose.connect("mongodb://localhost:27017/RAILWAY");
})();

module.exports = {
  trains: require("./Trains"),
};
