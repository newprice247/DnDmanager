const express = require('express');
const router = express.Router();
const { getEquipment, getEquipmentByName } = require('../../../controllers/equipment');

router.get('/', getEquipment);
router.get('/:name', getEquipmentByName);

module.exports = router;