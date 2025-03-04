"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function User(name, email, password, isAdmin) {
  _classCallCheck(this, User);

  this.id = crypto.randomUUID().replaceAll("-", "").slice(-8);
  this.isAdmin = false;
  this.name = name;
  this.email = email;
  this.password = password;
  this.isAdmin = isAdmin;
};

exports.User = User;