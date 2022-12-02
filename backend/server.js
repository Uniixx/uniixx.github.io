const db = require("./models");

const cors = require("cors");

const bodyParser = require("body-parser");

// Require express
const express = require("express");
// Initialize express
const app = express();

const PORT = 8080;
// parse JSON
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
// parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require("./routes/product.routes")(app);
require("./routes/annonce.routes")(app);
require("./routes/categorie.routes")(app);

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced.");
  })
  .catch((err) => console.log(err));

// create a server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
