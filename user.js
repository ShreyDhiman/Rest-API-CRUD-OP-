const express = require("express");
const fs = require("fs");

var app = express();

app.get("/listUsers", (req, res) => {
  fs.readFile(__dirname + "/" + "users.json", (err, data) => {
    console.log(data);
    res.end(data);
  });
});

var user = {
  user9: {
    name: "Shrey",
    password: "password4",
    profession: "teacher",
    id: 4,
  },
};

app.post("/addUser", (req, res) => {
  console.log(req.body);
  //   const user = req.body;
  //   const user = new user(req.body);
  // First read existing users.
  fs.readFile(__dirname + "/users.json", (err, data) => {
    data = JSON.parse(data);
    data["user5"] = user["user5"];
    // console.log(data);
    res.end(JSON.stringify(data));

    fs.writeFile("users.json", JSON.stringify(data), (err) => {
      if (err) throw err;
      console.log("File saved");
    });
  });
});

app.get("/:id", (req, res) => {
  // First read existing users.
  fs.readFile(__dirname + "/users.json", (err, data) => {
    var users = JSON.parse(data);
    var user = users["user" + req.params.id];
    console.log(user);
    res.end(JSON.stringify(user));
  });
});

app.delete("/deleteUser", (req, res) => {
  // First read existing users.
  fs.readFile(__dirname + "/" + "users.json", (err, data) => {
    data = JSON.parse(data);
    delete data["user" + 2];

    console.log(data);
    res.end(JSON.stringify(data));
  });
});

module.exports = app;
