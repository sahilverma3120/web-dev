const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');
router.get('/',homeController.home);
router.use('./users',require('./users'));
// for anty further routes, access from here
// router.use('/routerName', require('./routerfile));
modules.exports = router;
