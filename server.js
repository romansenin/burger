let express = require("express");
let exphbs = require("express-handlebars");

let app = express();
app.engine(
  "handlebars",
  exphbs({
    defaultLayoutL: "main"
  })
);
app.set("view engine", "handlebars");

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on port", PORT);
});
