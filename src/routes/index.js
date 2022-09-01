const express = require("express");
const router = express.Router();

const resumesRouter = require("./resumesRouter");
router.use("/resumelist", resumesRouter.router);

module.exports = router;