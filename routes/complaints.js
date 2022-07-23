const express = require('express');
const router = express.Router();
const feedbackController = require('../controller/complaintController');

router.post('/', feedbackController.create);

module.exports = router;