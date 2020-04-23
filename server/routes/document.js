const express = require('express');
const router = express.Router();

const controllers = require('../controllers/document');
const {checkAuth} = require("../utils/auth");

router.post('/document', checkAuth, controllers.create);
router.get('/document', checkAuth, controllers.getAll);
// add check if author
router.delete('/document', checkAuth, controllers.delete);

router.get('/checkToken', checkAuth, controllers.checkToken );
module.exports = router;

