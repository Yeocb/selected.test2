const express = require('express');
const resumesController = require('../controllers/resumesController');

const router = express.Router();

router.get("/", resumesController.getResumes);
router.get("/:resumesId", resumesController.getResumesId);

module.exports = {
    router
};