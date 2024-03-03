const express = require('express');
const router = express.Router();

const userRouter = require('./users');
const characterRouter = require('./characters');

router.use('/users', userRouter);
router.use('/characters', characterRouter);

module.exports = router;