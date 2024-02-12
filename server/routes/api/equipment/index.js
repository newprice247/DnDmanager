const express = require('express');
const router = express.Router();
const { getEquipment } = require('../../../controllers/equipment');

router.get('/', getEquipment);

module.exports = router;