const express = require('express');
const resumesController = require('../controllers/resumesController');

const router = express.Router();

router.get("/list", resumesController.getResumeList);

module.exports = {
    router
};