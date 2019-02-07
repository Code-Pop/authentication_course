var express = require("express");
var jwt = require("jsonwebtoken");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the API."
  });
});

app.get("/protected", verifyToken, (req, res) => {
  //Do we want to do this async or not?
  jwt.verify(req.token, "the_secret_key"),
    (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        res.json({
          message: "You've successly accessed a protected route!",
          authData
        });
      }
    };
});

app.post("/login", (req, res) => {
  // Are we fine with just faking out a user?
  const user = { name: "Nancy Usery", email: "nancy@gmail.com", id: 4321 };
  const token = jwt.sign({ user }, "the_secret_key");
  res.json({
    token
  });
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
