"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var goMainSpan = document.getElementById("goMain");

  if (goMainSpan) {
    goMainSpan.addEventListener("click", function () {
      window.location.href = "MainPage.html";
    });
  }
});