const goMainSpan2 = document.getElementById("goMain2");
if (goMainSpan2) {
  goMainSpan2.addEventListener("click", () => {
    window.location.href = "login.html";
  });
} else {
  console.error("goMain element not found");
}

