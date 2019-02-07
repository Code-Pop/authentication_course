var express = require("express");
var jwt = require("jsonwebtoken");
var cors = require("cors");
var bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the API."
  });
});

app.get("/protected", verifyToken, (req, res) => {
  //Do we want to do this async or not?
  jwt.verify(req.token, "the_secret_key", err => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "You've successly accessed a protected route!"
      });
    }
  });
});

app.post("/login", (req, res) => {
  // Are we fine with just faking out a user?
  const user = {
    email: "nancy@gmail.com",
    password: "pass123"
  };
  if (
    req.body &&
    req.body.email === user.email &&
    req.body.password === user.password
  ) {
    const token = jwt.sign({ user }, "the_secret_key");
    res.json({
      token,
      email: user.email
    });
  } else {
    res.sendStatus(401);
  }
});

function verifyToken(req, res, next) {
  //Get auth header value
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];

    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
