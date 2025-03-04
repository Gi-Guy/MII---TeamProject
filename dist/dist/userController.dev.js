"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserController = void 0;

var _User = require("./User.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserController =
/** @class */
function () {
  var UserController =
  /*#__PURE__*/
  function () {
    function UserController() {
      _classCallCheck(this, UserController);
    }

    _createClass(UserController, null, [{
      key: "saveUsers",
      value: function saveUsers() {
        var allUsers = [].concat(_toConsumableArray(UserController.users), _toConsumableArray(UserController.admins));
        localStorage.setItem("users", JSON.stringify(allUsers));
      }
    }, {
      key: "loadUsers",
      value: function loadUsers() {
        var allUsers = localStorage.getItem("users");
        var userArray = allUsers ? JSON.parse(allUsers) : [];
        UserController.users = userArray.filter(function (user) {
          return !user.isAdmin;
        });
        UserController.admins = userArray.filter(function (user) {
          return user.isAdmin;
        });
      }
    }, {
      key: "getUsers",
      value: function getUsers() {
        return UserController.users;
      }
    }, {
      key: "getAdmins",
      value: function getAdmins() {
        return UserController.admins;
      }
    }, {
      key: "getUserByEmail",
      value: function getUserByEmail(email) {
        return [].concat(_toConsumableArray(UserController.users), _toConsumableArray(UserController.admins)).find(function (user) {
          return user.email === email;
        });
      }
    }, {
      key: "addNewUser",
      value: function addNewUser(name, email, password, isAdmin) {
        if (!UserController.getUserByEmail(email)) {
          var newUser = new _User.User(name, email, password, isAdmin);

          if (isAdmin) {
            UserController.admins.push(newUser);
          } else {
            UserController.users.push(newUser);
          }

          UserController.saveUsers();
          console.log("New user added: ", newUser);
          return newUser;
        } else {
          console.log("User already exists");
          return null;
        }
      }
    }, {
      key: "login",
      value: function login(email, password) {
        var user = UserController.getUserByEmail(email);

        if (user && user.password === password) {
          UserController.setLoggedInUser(user);
          return user;
        }

        return undefined;
      }
    }, {
      key: "setLoggedInUser",
      value: function setLoggedInUser(user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
      }
    }, {
      key: "getLoggedInUser",
      value: function getLoggedInUser() {
        var userData = localStorage.getItem("loggedInUser");
        return userData ? JSON.parse(userData) : null;
      }
    }, {
      key: "logout",
      value: function logout() {
        localStorage.removeItem("loggedInUser");
      }
    }]);

    return UserController;
  }();

  UserController.users = [];
  UserController.admins = [];
  return UserController;
}();

exports.UserController = UserController;