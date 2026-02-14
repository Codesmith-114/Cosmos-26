const enter = document.getElementById("preludeEnter");
const glitch = document.getElementById("glitch");

enter.addEventListener("click", () => {
    glitch.classList.add("active");

    setTimeout(() => {
        window.location.href = "event.html";
    }, 800);
});
