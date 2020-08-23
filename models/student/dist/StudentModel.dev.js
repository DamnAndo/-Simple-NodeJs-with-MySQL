"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var path = require('path');

var fs = require('fs');

var db = require('../../utils/database');

var p = path.join(path.dirname(process.mainModule.filename), 'data', 'student.json');

var getStudentFromFile = function getStudentFromFile(cb) {
  fs.readFile(p, function (err, fileContent) {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports =
/*#__PURE__*/
function () {
  function Student(id, name, classs, nik, image, gender, address) {
    _classCallCheck(this, Student);

    this.id = id;
    this.name = name;
    this.classs = classs;
    this.nik = nik;
    this.image = image;
    this.gender = gender;
    this.address = address;
  } // save(){
  //         getStudentFromFile(student=>{
  //             if(this.id){
  //                 const studentIndex = student.findIndex(stud => stud.id === this.id );
  //                 const updateStudent = [...student];
  //                 updateStudent[studentIndex]=this;
  //                 fs.writeFile(p,JSON.stringify(updateStudent),(err)=>{
  //                     console.log(err);
  //                 });
  //             }else{
  //                 this.id = Math.random().toString();
  //                 student.push(this);
  //                 fs.writeFile(p,JSON.stringify(student),(err)=>{
  //                     console.log(err);
  //                 });
  //             }
  //         });
  // }


  _createClass(Student, [{
    key: "save",
    value: function save() {
      if (this.id) {
        return db.execute("UPDATE student SET name=\"".concat(this.name, "\",classs=\"").concat(this.classs, "\",nik=\"").concat(this.nik, "\",image=\"").concat(this.image, "\",gender=\"").concat(this.gender, "\",address=\"").concat(this.address, "\" WHERE id=\"").concat(this.id, "\""));
      } else {
        return db.execute("INSERT INTO student (name,classs,nik,image,gender,address) VALUES (?,?,?,?,?,?)", [this.name, this.classs, this.nik, this.image, this.gender, this.address]);
      }
    } // static fetchAll(cb){
    //     getStudentFromFile(cb);
    // }

  }], [{
    key: "fetchAll",
    value: function fetchAll() {
      return db.execute("SELECT * FROM student");
    } // static findById(studentId,cb){
    //     getStudentFromFile(student=>{
    //         const data = student.find(p => p.id === studentId);
    //         cb(data);
    //     });
    // }

  }, {
    key: "findById",
    value: function findById(studentId) {
      return db.execute("SELECT * FROM student WHERE student.id = ?", [studentId]);
    } // static deleteById(id){
    //     getStudentFromFile(student=>{
    //         const studentDelete = student.filter(stud => stud.id !== id);
    //         console.log(studentDelete);
    //         fs.writeFile(p,JSON.stringify(studentDelete),err=>{
    //             console.log(err);
    //         });
    //     });
    // }

  }, {
    key: "deleteById",
    value: function deleteById(id) {
      return db.execute("DELETE FROM student WHERE student.id=\"".concat(id, "\""));
    }
  }]);

  return Student;
}();