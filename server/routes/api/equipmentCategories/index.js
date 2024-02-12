const express = require('express');
const router = express.Router();
const { getEquipmentCategories, getEquipmentCategoryByName } = require('../../../controllers/dnd/equipmentCategories');

router.get('/', getEquipmentCategories);
router.get('/:name', getEquipmentCategoryByName);

module.exports = router;