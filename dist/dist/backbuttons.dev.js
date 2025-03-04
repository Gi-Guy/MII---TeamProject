"use strict";

var goMainSpan = document.getElementById("goMain");

if (goMainSpan) {
  goMainSpan.addEventListener("click", function () {
    window.location.href = "MainPage.html";
  });
} else {
  console.error("goMain element not found");
}

var goMainSpan2 = document.getElementById("goMain2");

if (goMainSpan2) {
  goMainSpan2.addEventListener("click", function () {
    window.location.href = "login.html";
  });
} else {
  console.error("goMain2 element not found");
}