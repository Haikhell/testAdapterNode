const express = require('express');

const router = express.Router();
const masterNode = require('./masterNode');

router.use('/master', masterNode);

module.exports = router;
