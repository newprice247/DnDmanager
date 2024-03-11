const express = require('express');
const router = express.Router();
const { getUsers, getUser, getUserByEmail, createUser, updateUser, login } = require('../../../controllers/user/userControllers');

router.get('/', getUsers);
router.get('/:id', getUser);
router.get('/email/:email', getUserByEmail);
router.route('/login').post(login)
router.route('/register').post(createUser);

router.put('/:id', updateUser);

module.exports = router;