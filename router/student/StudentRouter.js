
const express = require('express');

const router = express.Router();

const StudentController = require('../../controllers/student/StudentController');

router.get('/student-list',StudentController.getStudentList);
router.get('/student-list/add',StudentController.getStudentAdd);
router.post('/student-add',StudentController.postStudentAdd);
router.get('/student-list/:student',StudentController.getStudentEdit);
router.post('/student-edit',StudentController.postStudentEdit);
router.post('/student-delete',StudentController.postStudentDelete);

module.exports = router