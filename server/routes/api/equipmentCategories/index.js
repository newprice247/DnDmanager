const express = require('express');
const router = express.Router();
const { getEquipmentCategories } = require('../../../controllers/equipmentCategories');

router.get('/', getEquipmentCategories);

module.exports = router;