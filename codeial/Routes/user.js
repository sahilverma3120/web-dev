const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');
router.get('/',homeController.home);
router.use('./users',require('./users'));
modules.exports = router;
