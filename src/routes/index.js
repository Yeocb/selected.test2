const express = require("express");
const router = express.Router();

const resumesRouter = require("./resumesRouter");
router.use("/resumes", resumesRouter.router);

const authRouter = require("./authRouter");
router.use("/auths", authRouter.router);

module.exports = router; 
