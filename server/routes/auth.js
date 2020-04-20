const express = require('express');
const router = express.Router();
const controllers = require('../controllers/auth');

router.post('/auth/register', controllers.register);
router.post('/auth/login', controllers.login);

router.get('/auth/checkToken', checkAuth, controllers.checkToken );
module.exports = router;

