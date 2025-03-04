const goMainSpan3 = document.getElementById("goMain3");
if (goMainSpan3) {
    goMainSpan3.addEventListener("click", () => {
        window.location.href = "MainPage.html";
    });
}
else {
    console.error("goMain element not found");
}
