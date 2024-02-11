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

router.use('/abilityScores', abilityScoresRouter);
router.use('/alignments', alignmentsRouter);
router.use('/backgrounds', backgroundsRouter);
router.use('/classes', classesRouter);
router.use('/conditions', conditionsRouter);
router.use('/damageTypes', damageTypesRouter);
router.use('/equipment', equipmentRouter);
router.use('/equipmentCategories', equipmentCategoriesRouter);
router.use('/features', featuresRouter);
router.use('/languages', languagesRouter);
router.use('/magicItems', magicItemsRouter);
router.use('/magicSchools', magicSchoolsRouter);
router.use('/monsters', monstersRouter);
router.use('/proficiencies', proficienciesRouter);
router.use('/racesRouter', racesRouter);
router.use('/rules', rulesRouter);
router.use('/ruleSections', ruleSectionsRouter);
router.use('/skills', skillsRouter);
router.use('/spells', spellsRouter);
router.use('/subclasses', subclassesRouter);
router.use('/subraces', subracesRouter);
router.use('/traits', traitsRouter);
router.use('/weaponProperties', weaponPropertiesRouter);

getAll = async (req, res) => {
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


router.get('/', getAll);

module.exports = router;