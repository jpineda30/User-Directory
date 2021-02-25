const express = require("express");
var path = require("path");


const PORT =  process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// routes

require("./routes/routes.js")(app);





app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});