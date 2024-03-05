const express = require('express');
const router = express.Router();
const { getUsers, getUser, createUser, updateUser, login } = require('../../../controllers/user/userControllers');

router.get('/', getUsers);
router.get('/:id', getUser);
router.route('/login').post(login)
router.post('/register', createUser);

router.put('/:id', updateUser);

module.exports = router;