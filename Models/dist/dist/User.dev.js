"use strict";

exports.__esModule = true;
exports.User = void 0;

var User =
/** @class */
function () {
  function User(name, email, password, isAdmin) {
    this.id = crypto.randomUUID().replaceAll("-", "").slice(-8);
    this.isAdmin = false;
    this.name = name;
    this.email = email;
    this.password = password;
    this.isAdmin = isAdmin;
  }

  return User;
}();

exports.User = User;