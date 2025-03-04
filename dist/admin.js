document.addEventListener("DOMContentLoaded", () => {
    const navButtons = document.querySelectorAll("nav.admin-nav button");
    const sections = document.querySelectorAll(".admin-section");
    function clearActive() {
        navButtons.forEach(button => button.classList.remove("active"));
        sections.forEach(section => section.classList.remove("active"));
    }
    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            clearActive();
            button.classList.add("active");
            const targetId = button.id.replace("nav", "section");
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add("active");
            }
        });
    });
});
