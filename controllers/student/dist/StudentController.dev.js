"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var StudentModel = require('../../models/student/StudentModel');

exports.getStudentList = function (req, res, next) {
  StudentModel.fetchAll().then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        rows = _ref2[0],
        filedData = _ref2[1];

    res.render('student/student-list', {
      pageTitle: 'Student List',
      path: '/student-list',
      students: rows
    });
  });
};

exports.getStudentAdd = function (req, res, next) {
  res.render('student/student-add', {
    pageTitle: 'Student Add',
    path: '/student-list',
    student: '',
    edit: false
  });
};

exports.postStudentAdd = function (req, res, next) {
  var name = req.body.name;
  var classs = req.body.classs;
  var nik = req.body.nik;
  var image = req.body.image;
  var gender = req.body.gender;
  var address = req.body.address;
  var student = new StudentModel(null, name, classs, nik, image, gender, address);
  student.save().then(function () {
    res.redirect('/student-list');
  })["catch"](function (err) {
    console.log(err);
  });
};

exports.getStudentEdit = function (req, res, next) {
  var edit = req.query.edit;

  if (!edit) {
    res.redirect("/");
  }

  var studentId = req.params.student;
  StudentModel.findById(studentId).then(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 1),
        student = _ref4[0];

    res.render('student/student-add', {
      pageTitle: 'Student Edit',
      path: '/student-list',
      student: student[0],
      edit: true
    });
  })["catch"](function (err) {
    console.log(err);
  });
};

exports.postStudentEdit = function (req, res, next) {
  var id = req.body.id;
  var name = req.body.name;
  var classs = req.body.classs;
  var nik = req.body.nik;
  var image = req.body.image;
  var gender = req.body.gender;
  var address = req.body.address;
  var student = new StudentModel(id, name, classs, nik, image, gender, address);
  student.save().then(function () {
    res.redirect('/student-list');
  })["catch"](function (err) {
    console.log(err);
  });
};

exports.postStudentDelete = function (req, res, next) {
  var id = req.body.id;
  StudentModel.deleteById(id).then(function () {
    res.redirect("/student-list");
  })["catch"](function (err) {
    console.log(err);
  });
};