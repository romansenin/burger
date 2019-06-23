let express = require("express");

let router = express.Router();

// Import the model (burger.js) to use its database functions.
let burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(burgers) {
    console.log(burgers);
    res.render("index");
  });
});

module.exports = router;