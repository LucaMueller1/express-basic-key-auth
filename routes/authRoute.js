var express = require('express');
var router = express.Router();
const authService = require("../services/AuthenticationService")

router.post("/", (req, res) => {
  if(!req.body.username || !req.body.password) {
    res.status(400).send("Missing username or password in body");
  }

  let token = authService.getToken(req.body.username, req.body.password)
  res.status(200).send(token);
  res.status(400).send("Incorrect username or password!");

});

module.exports = router;