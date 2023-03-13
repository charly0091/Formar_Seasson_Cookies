const express = require('express');
const router = express.Router();

const validation = require('../validations/validation');

const controller = require('../controllers/mainControllers');

router.get('/', controller.getMainPage);
router.post("/form" , validation , controller.getData);
router.get("/gracias" , controller.gracias)

module.exports = router; 