const express = require("express");
const fs = require("fs");
const User = require("./user");

var app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(User);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
