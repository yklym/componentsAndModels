const express = require('express');
const router = express.Router();

const controllers = require('../controllers/team');
const {checkAuth} = require("../utils/auth");

// router.post('/team', checkAuth, controllers.create);
router.get('/team', checkAuth, controllers.getAll);
// add check if author
// router.delete('/document', checkAuth, controllers.delete);

module.exports = router;

