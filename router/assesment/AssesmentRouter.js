const express = require('express');

const router = express.Router();

const AssesmentController = require('../../controllers/assesment/AssesmentControl');

router.get('/assesment',AssesmentController.getIndex);
router.get('/assesment/add',AssesmentController.getAssesmentAdd);
router.post('/assesment-add',AssesmentController.postAssesmentAdd);

module.exports = router;