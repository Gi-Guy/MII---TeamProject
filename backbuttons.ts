const goMainSpan = document.getElementById("goMain");
if (goMainSpan) {
  goMainSpan.addEventListener("click", () => {
    window.location.href = "MainPage.html";
  });
} else {
  console.error("goMain element not found");
}

