const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/document', require('./document'));


module.exports = router;