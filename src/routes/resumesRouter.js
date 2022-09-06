const express = require('express');
const resumesController = require('../controllers/resumesController');
const errorHandler = require("../middlewares/errorhandler");
const auth = require("../middlewares/auth");

const router = express.Router();
//auth.validateToken,
router.get("/list", errorHandler(resumesController.getResumes));
router.get("/:resumesid", errorHandler(resumesController.getResumesId));
router.post("/addresume", errorHandler(resumesController.postResumesInfo));
router.post("/addskill", errorHandler(resumesController.postSkills));
router.post("/addurl", errorHandler(resumesController.postUrls));
router.post("/addusercareer", errorHandler(resumesController.postUserCareers));
router.delete("/:resumesid", errorHandler(resumesController.deleteResumesId));

module.exports = {
    router
};