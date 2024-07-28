const express = require('express');
const apiController = require('../controllers/apiController');
const router = express.Router();

router.post('/check-symptoms', apiController.checkSymptoms);

module.exports = router;
