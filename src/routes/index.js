const express = require("express");
const router = express.Router();

const resumesRouter = require("./resumesRouter");
router.use("/resumes", resumesRouter.router);

module.exports = router;