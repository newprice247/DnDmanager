const express = require('express');
const axios = require('axios');
const router = express.Router();

const abilityScoresRouter = require('./abilityScores');
const alignmentsRouter = require('./alignments');
const backgroundsRouter = require('./backgrounds');
const classesRouter = require('./classes');
const conditionsRouter = require('./conditions');
const damageTypesRouter = require('./damageTypes');
const equipmentRouter = require('./equipment');
const equipmentCategoriesRouter = require('./equipmentCategories');
const featuresRouter = require('./features');
const languagesRouter = require('./languages');
const magicItemsRouter = require('./magicItems');
const magicSchoolsRouter = require('./magicSchools');
const monstersRouter = require('./monsters');
const proficienciesRouter = require('./proficiencies');
const racesRouter = require('./races');
const rulesRouter = require('./rules');
const ruleSectionsRouter = require('./ruleSections');
const skillsRouter = require('./skills');
const spellsRouter = require('./spells');
const subclassesRouter = require('./subclasses');
const subracesRouter = require('./subraces');
const traitsRouter = require('./traits');
const weaponPropertiesRouter = require('./weaponProperties');

router.use('/ability-scores', abilityScoresRouter);
router.use('/alignments', alignmentsRouter);
router.use('/backgrounds', backgroundsRouter);
router.use('/classes', classesRouter);
router.use('/conditions', conditionsRouter);
router.use('/damage-types', damageTypesRouter);
router.use('/equipment', equipmentRouter);
router.use('/equipment-categories', equipmentCategoriesRouter);
router.use('/features', featuresRouter);
router.use('/languages', languagesRouter);
router.use('/magic-items', magicItemsRouter);
router.use('/magic-schools', magicSchoolsRouter);
router.use('/monsters', monstersRouter);
router.use('/proficiencies', proficienciesRouter);
router.use('/races', racesRouter);
router.use('/rules', rulesRouter);
router.use('/rule-sections', ruleSectionsRouter);
router.use('/skills', skillsRouter);
router.use('/spells', spellsRouter);
router.use('/subclasses', subclassesRouter);
router.use('/subraces', subracesRouter);
router.use('/traits', traitsRouter);
router.use('/weapon-properties', weaponPropertiesRouter);

getAllDnD = async (req, res) => {
    const url = `http://www.dnd5eapi.co/api`;
    await axios
        .get(url)
        .then(function (response) {
            res.json(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });
}


router.get('/', getAllDnD);

module.exports = router;