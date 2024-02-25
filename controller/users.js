var express = require("express");
var router = express.Router();
var usersService = require("../serviceLayer/usersService");
/* GET users listing. */

router.post("/create-user", async function (req, res, next) {
  try {
    const dataObj = req.body.data;
    const result = await usersService.createUser(dataObj);
    // send the result back to the client
    res.send(result);
  } catch (err) {
    // send the response error message
    res.status(500).send("DB connection error: " + err.message);
  }
});

router.put("/update-user/", async function (req, res, next) {
  try {
    const id = req.query.id;
    const dataObj = req.body.data;
    const result = await usersService.updateUser(id, dataObj);
    res.send(result);
  } catch (error) {
    res.status(500).send("what a error");
  }
});

router.delete("/delete-user/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const result = await usersService.deleteUser(id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/get-user", async function (req, res, next) {
  try {
    const result = await usersService.getUser();
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
