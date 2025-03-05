const goMainSpan4 = document.getElementById("goMain4");
if (goMainSpan4) {
    goMainSpan4.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default anchor action
        window.location.href = "MainPage.html";
    });
}
