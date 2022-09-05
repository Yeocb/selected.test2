const express = require('express');
const resumesController = require('../controllers/resumesController');
const errorHandler = require("../middlewares/errorhandler");

const router = express.Router();

router.get("/resumesList/:userId", errorHandler(resumesController.getResumes));
router.get("/:resumesId", errorHandler(resumesController.getResumesId));
router.post("/addResume", errorHandler(resumesController.postResumesInfo));
router.post("/addSkill", errorHandler(resumesController.postSkills));
router.post("/addUrl", errorHandler(resumesController.postUrls));
router.post("/addUserCareer", errorHandler(resumesController.postUserCareers));
router.delete("/:resumesId", errorHandler(resumesController.deleteResumesId));

module.exports = {
    router
};