const express = require("express");
const Router = express.Router;
const router = Router();

router.use("/auth", require("./auth"));
router.use("/expense", require("./expense"));
router.use("/user", require("./user"));

module.exports = router;
