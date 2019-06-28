let express = require("express");

let router = express.Router();

// Import the model (burger.js) to use its database functions.
let burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(burgers) {
    res.render("index", { burgers });
  });
});

router.put("/eat", function(req, res) {
  console.log(req.body);
  // burger.updateOne({ devoured: true }, "id = " + req.body.id, function(result) {
  //   if (result.changedRows == 0) {
  //     // If no rows were changed, then the ID must not exist, so 404
  //     return res.status(404).end();
  //   } else {
  //     res.status(200).end();
  //   }
  // });
});

module.exports = router;
