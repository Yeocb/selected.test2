const express = require('express');
const resumesController = require('../controllers/resumesController');
const errorHandler = require("../middlewares/errorhandler");
const auth = require("../middlewares/auth");

const router = express.Router();
//auth.validateToken,
router.get("/list",auth.validateToken, errorHandler(resumesController.getResumes));
router.get("/:resumesid",auth.validateToken, errorHandler(resumesController.getResumesId));
router.post("/addresume",auth.validateToken, errorHandler(resumesController.postResumesInfo));
router.post("/addskill",auth.validateToken, errorHandler(resumesController.postSkills));
router.post("/addurl",auth.validateToken, errorHandler(resumesController.postUrls));
router.post("/addusercareer",auth.validateToken, errorHandler(resumesController.postUserCareers));
router.delete("/:resumesid",auth.validateToken, errorHandler(resumesController.deleteResumesId));

module.exports = {
    router
};