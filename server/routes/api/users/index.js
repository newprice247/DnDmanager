const express = require('express');
const router = express.Router();
const { getUsers, getUser } = require('../../../controllers/user/userControllers');

router.get('/', getUsers);
router.get('/:id', getUser);

module.exports = router;