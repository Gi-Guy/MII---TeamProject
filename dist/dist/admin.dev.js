"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var navButtons = document.querySelectorAll("nav.admin-nav button");
  var sections = document.querySelectorAll(".admin-section");

  function clearActive() {
    navButtons.forEach(function (button) {
      return button.classList.remove("active");
    });
    sections.forEach(function (section) {
      return section.classList.remove("active");
    });
  }

  navButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      clearActive();
      button.classList.add("active");
      var targetId = button.id.replace("nav", "section");
      var targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.classList.add("active");
      }
    });
  });
});